import { Link } from 'react-router-dom';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/SideBar';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';

export const App = () => {
    const { theme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};
