import {
    getArticleDetailsData, getArticleDetailsError,
    getArticleDetailsIsLoading,
} from 'entities/Article/model/selectors/articleDetails';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import {
    classNames, DynamicModuleLoader, ReducerList, useAppDispatch,
} from 'shared/lib';
import {
    Avatar, Icon, Skeleton, Typography, TypographyAlign, TypographySize,
} from 'shared/ui';
import { ArticleBlock, ArticleBlockType } from 'entities/Article/model/types/article';
import cls from './ArticleDetails.module.scss';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}
const reducers: ReducerList = {
    articleDetails: articleDetailsReducer,
};
export const ArticleDetails = (props: ArticleDetailsProps) => {
    const { className, id } = props;
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const article = useSelector(getArticleDetailsData);
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (__PROJECT__ !== 'storybook') dispatch(fetchArticleById(id));
    }, [dispatch, id]);
    let content;
    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                <Skeleton className={cls.title} maxWidth={669} height={31} />
                <Skeleton className={cls.skeleton} maxWidth={339} height={31} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </>

        );
    } else if (error) {
        content = (
            <Typography
                title={t('Error occurs while loading article')}
                align={TypographyAlign.CENTER}

            />
        );
    } else {
        content = (
            <>
                <div className={cls.avatarWrapper}>
                    <Avatar size={200} src={article?.img} />
                </div>
                <Typography
                    title={article?.title}
                    text={article?.subtitle}
                    size={TypographySize.L}
                />
                <div className={cls.articleInfo}>
                    <Icon Svg={EyeIcon} />
                    <Typography text={article?.views.toString()} />
                </div>
                <div className={cls.articleInfo}>
                    <Icon Svg={CalendarIcon} />
                    <Typography text={article?.createdAt.toString()} />
                </div>
            </>

        );
    }

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
            case ArticleBlockType.CODE:
                return <ArticleCodeBlockComponent key={block.id} block={block} className={cls.block} />;
            case ArticleBlockType.IMAGE:
                return <ArticleImageBlockComponent key={block.id} block={block} className={cls.block} />;
            case ArticleBlockType.TEXT:
                return <ArticleTextBlockComponent key={block.id} className={cls.block} block={block} />;
            default:
                return null;
        }
    }, []);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>

            <div className={classNames(cls.ArticleDetails, {}, [className])}>{content}</div>
            {article?.blocks.map(renderBlock)}
        </DynamicModuleLoader>
    );
};
