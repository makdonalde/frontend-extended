import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { AddCommentForm } from 'features/addCommentForm';
import { getArticleCommentsIsLoading } from 'pages/ArticleDetailPage/model/selectors/commentsSelectors';
import { fetchCommentsByArticleId }
    from 'pages/ArticleDetailPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { articleDetailsCommentsReducer, getArticleComments }
    from 'pages/ArticleDetailPage/model/slices/articleDetailsCommentsSlice';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import {
    classNames, DynamicModuleLoader, ReducerList, useAppDispatch, useInitialEffect,
} from 'shared/lib';
import { Button, Typography } from 'shared/ui';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}
const reducerList: ReducerList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation();
    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getArticleCommentsIsLoading);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);
    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });
    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);
    if (!id) {
        return (
            <div>
                {t('Article is not found')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducerList} removeAfterUnmount>

            <div className={classNames('', {}, [className])}>
                <Button onClick={onBackToList}>
                    {t('back-to-article')}
                </Button>
                <ArticleDetails id={id} />
                <Typography className={cls.commentTitle} title={t('Comments')} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    isLoading={isLoading}
                    comments={comments}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
