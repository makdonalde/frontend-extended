import { Counter } from 'entities/Counter';
import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <div>
            <Counter />
            {t('О сайте')}
        </div>
    );
};

export default AboutPage;
