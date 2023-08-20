/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { Button } from 'shared/ui';
import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
    className?: string
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };
    return (
        <div className={classNames(cls.ErrorPage, {}, [className])}>
            <p>Error occurs</p>
            <Button onClick={reloadPage}>
                Reload the page
            </Button>
        </div>
    );
};
