import { classNames } from 'shared/lib';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <ArticleListItemSkeleton key={index} view={view} />
    ));
export const ArticleList = (props: ArticleListProps) => {
    const {
        articles,
        view = ArticleView.SMALL,
        className,
        isLoading,
    } = props;
    if (isLoading) {
        return (
            <div
                className={classNames('', {}, [className, cls[view]])}
            >
                {getSkeletons(view)}
            </div>
        );
    }
    const renderArticle = (article: Article) => {
        return (
            <ArticleListItem
                key={article.id}
                article={article}
                view={view}
            />
        );
    };
    return (
        <div className={classNames('', {}, [className, cls[view]])}>
            {articles.length > 0 ? articles.map(renderArticle) : null}
        </div>
    );
};
