import { classNames } from 'shared/lib';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView
}

export const ArticleList = (props: ArticleListProps) => {
    const {
        articles, view = ArticleView.SMALL, className, isLoading,
    } = props;
    const renderArticle = (article: Article) => {
        return (
            <ArticleListItem
                article={article}
                view={view}
            />
        );
    };
    return (
        <div className={classNames(cls.ArticleList, {}, [className])}>
            {articles.length > 0 ? articles.map(renderArticle) : null}
        </div>
    );
};
