/* eslint-disable i18next/no-literal-string */
/* eslint-disable max-len */
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme, Modal } from 'shared/ui';
import { useCallback, useState } from 'react';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal(!isAuthModal);
    }, [isAuthModal]);
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onToggleModal}>{t('Войти')}</Button>
                <Modal onClose={onToggleModal} isOpen={isAuthModal}> Lorem  sit amet consectetur adipisicing elit. Quod provident aut qui fuga impedit voluptates in repudiandae ducimus dicta! Adipisci, natus corrupti autem nemo iusto placeat aliquam fugit aspernatur at?</Modal>
            </div>
        </div>
    );
};
