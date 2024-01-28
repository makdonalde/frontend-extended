import { classNames } from 'shared/lib';
import {
    Avatar, Button, ButtonTheme, Card, Icon, Typography,
} from 'shared/ui';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import {
    Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from '../../model/types/article';
import cls from './ArticleListItem.module.scss';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView
}

export const ArticleListItem = (props: ArticleListItemProps) => {
    const {
        className, view, article,
    } = props;
    const navigate = useNavigate();
    const onOpenArticle = useCallback(() => {
        navigate(RoutePath.article_details + article.id);
    }, [article.id, navigate]);
    const types = <Typography text={article.type.join(', ')} className={cls.types} />;
    const { t } = useTranslation();
    const views = (
        <>
            <Typography text={String(article.views)} className={cls.views} />
            <Icon Svg={EyeIcon} />
        </>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;
        return (
            <div className={classNames('', {}, [className, cls.BIG])}>
                <Card>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user?.avatar} />
                        <Typography text={article.user.username} className={cls.username} />
                        <Typography text={article.createdAt} className={cls.date} />
                    </div>
                    <Typography title={article.title} />

                    {types}
                    <img src={article.img} className={cls.img} alt={article.title} />
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
                    )}
                    <div className={cls.footer}>
                        <Button onClick={onOpenArticle} theme={ButtonTheme.OUTLINE}>
                            {t('chitat-dalee')}
                        </Button>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames('', {}, [className, cls[view]])}>
            <Card onClick={onOpenArticle}>
                <div className={cls.imageWrapper}>
                    <img src={article.img} className={cls.img} alt={article.title} />
                    <Typography text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Typography text={article.title} className={cls.title} />
            </Card>
        </div>
    );
};
