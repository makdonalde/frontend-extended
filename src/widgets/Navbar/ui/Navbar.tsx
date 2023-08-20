import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.main}
                    className={cls.mainLink}
                >
                    {t('Main')}
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.RED}
                    to={RoutePath.about}
                    className={cls.mainLink}
                >
                    {t('About site')}
                </AppLink>
            </div>
        </div>
    );
};
