import { ArticleDetails } from 'entities/Article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation();
    if (!id) {
        return (
            <div>
                {t('Article is not found')}
            </div>
        );
    }
    return (
        <div className={classNames('', {}, [className])}>
            <ArticleDetails id={id} />

        </div>
    );
};

export default memo(ArticleDetailsPage);
