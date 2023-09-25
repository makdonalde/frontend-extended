import { profileActions, updateProfileData } from 'entities/Profile';
import { getProfileReadonly } from 'entities/Profile/model/selectors/getProfileReadonly/getProfileReadonly';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames, useAppDispatch } from 'shared/lib';
import { Typography, Button, ButtonTheme } from 'shared/ui';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}
export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation();
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();
    const onEdit = useCallback(() => { dispatch(profileActions.setReadonly(false)); }, [dispatch]);
    const onSave = useCallback(() => { dispatch(updateProfileData()); }, [dispatch]);

    const onCancelEdit = useCallback(() => { dispatch(profileActions.cancelEdit()); }, [dispatch]);
    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Typography title={t('profile page')}></Typography>
            {readonly ? (
                <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE} onClick={onEdit}>
                    {t('Edit')}
                </Button>
            ) : (
                <>
                    <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE_RED} onClick={onCancelEdit}>
                        {t('Cancel')}
                    </Button>
                    <Button className={cls.saveBtn} theme={ButtonTheme.OUTLINE} onClick={onSave}>
                        {t('Save')}
                    </Button>
                </>

            )}
        </div>
    );
};
