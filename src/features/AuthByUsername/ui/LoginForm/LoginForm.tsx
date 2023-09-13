import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { Button, Input } from 'shared/ui';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}
export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input autofocus placeholder={t('username')} type="text" />
            <Input placeholder={t('password')} type="text" />
            <Button className={cls.loginBtn}>{t('Enter')}</Button>
        </div>
    );
};
