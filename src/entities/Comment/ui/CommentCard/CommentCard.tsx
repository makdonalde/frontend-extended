import { Comment } from 'entities/Comment';
import { classNames } from 'shared/lib';
import {
    Avatar, Icon, Skeleton, Typography,
    AppLink,
} from 'shared/ui';
import AvatarPlaceHolder from 'shared/assets/icons/avatar-place-holder.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean
}

export const CommentCard = (props: CommentCardProps) => {
    const { className, comment, isLoading } = props;
    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton height={16} width={100} />

                </div>
                <div>
                    <Skeleton width="100%" height={50} />
                </div>
            </div>
        );
    }
    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink className={cls.header} to={`${RoutePath.profile}${comment?.user.id}`}>
                {comment?.user.avatar
                    ? <Avatar size={30} src={comment.user.avatar} /> : <Icon size={30} Svg={AvatarPlaceHolder} />}
                <Typography title={comment?.user.username} />
            </AppLink>
            <Typography text={comment?.text} />
        </div>
    );
};
