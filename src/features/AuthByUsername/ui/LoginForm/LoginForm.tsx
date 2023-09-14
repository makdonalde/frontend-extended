import { getLoginError } from 'features/AuthByUsername/model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from 'features/AuthByUsername/model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from 'features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from 'features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
    useDispatch, useSelector,
} from 'react-redux';
import { classNames } from 'shared/lib';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    Button, Input, Typography, TypographyTheme,
} from 'shared/ui';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
}

const initialReducers: ReducerList = {
    loginForm: loginReducer,
};
const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback((value: string) => dispatch(
        loginActions.setUsername(value),
    ), [dispatch]);
    const onChangePassword = useCallback((value: string) => dispatch(
        loginActions.setPassword(value),
    ), [dispatch]);
    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);
    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                {error && (
                    <Typography text={t('Вы ввели неправильный логин или пароль')} theme={TypographyTheme.ERROR} />
                )}
                <Input
                    onChange={onChangeUsername}
                    value={username}
                    autofocus
                    placeholder={t('username')}
                    type="text"
                />
                <Input
                    onChange={onChangePassword}
                    value={password}
                    placeholder={t('password')}
                    type="text"
                />
                <Button disabled={isLoading} onClick={onLoginClick} className={cls.loginBtn}>{t('Enter')}</Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
