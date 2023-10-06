import { classNames } from 'shared/lib';
import { Icon, Typography } from 'shared/ui';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { Article, ArticleView } from '../../model/types/article';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView
}

export const ArticleListItem = (props: ArticleListItemProps) => {
    const {
        className, view, article,
    } = props;
    if (view === ArticleView.BIG) {
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className])}>
                {article.title}
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className])}>
            <div>
                <div className={cls.imageWrapper}>
                    <img src={article.img} width={50} className={cls.img} alt={article.title} />
                    <Typography text={article.createdAt} />
                </div>
                <div className={cls.infoWrapper}>
                    <Typography text={article.type.join(',')} className={cls.types} />
                    <Typography text={article.views.toString()} />
                    <Icon Svg={EyeIcon} />
                </div>
                <div>
                    <Typography text={article.subtitle} />
                </div>
            </div>
        </div>
    );
};
