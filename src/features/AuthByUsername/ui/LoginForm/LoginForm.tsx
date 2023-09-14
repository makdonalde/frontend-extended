import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib';
import {
    Button, Input, Typography, TypographyTheme,
} from 'shared/ui';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}
export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, isLoading, error,
    } = useSelector(getLoginState);
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
    );
});
