import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib';
import { Button, Input } from 'shared/ui';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}
export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { username, password } = useSelector(getLoginState);
    const onChangeUsername = useCallback((value: string) => dispatch(
        loginActions.setUsername(value),
    ), [dispatch]);
    const onChangePassword = useCallback((value: string) => dispatch(
        loginActions.setPassword(value),
    ), [dispatch]);
    const onLoginClick = useCallback(() => {

    }, []);
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
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
            <Button onClick={onLoginClick} className={cls.loginBtn}>{t('Enter')}</Button>
        </div>
    );
});
