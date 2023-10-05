import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    classNames, DynamicModuleLoader, ReducerList, useAppDispatch,
} from 'shared/lib';
import { Button, Input } from 'shared/ui';
import { getAddCommentError, getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentFormSlice';
import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}
const reducerList: ReducerList = {
    addCommentForm: addCommentFormReducer,
};
const AddCommentForm = ({ className, onSendComment }: AddCommentFormProps) => {
    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentError);
    const dispatch = useAppDispatch();
    const onCommentFormChangeHandler = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentFormChangeHandler('');
    }, [onCommentFormChangeHandler, onSendComment, text]);
    return (
        <DynamicModuleLoader reducers={reducerList} removeAfterUnmount>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    className={cls.input}
                    placeholder={t('Write your comment')}
                    value={text}
                    onChange={onCommentFormChangeHandler}
                />
                <Button onClick={onSendHandler}>{t('Send')}</Button>
            </div>
        </DynamicModuleLoader>
    );
};

export default AddCommentForm;
