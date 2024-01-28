import { classNames } from 'shared/lib';
import BigViewIcon from 'shared/assets/icons/big-view.svg';
import SmallViewIcon from 'shared/assets/icons/small-view.svg';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps{
    className ?: string;
    view:ArticleView,
    onViewClick?:(view:ArticleView) => void
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: SmallViewIcon,
    },
    {
        view: ArticleView.BIG,
        icon: BigViewIcon,
    },
];
export const ArticleViewSelector = (props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;
    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((view) => (
                <Icon Svg={view.icon}></Icon>
            ))}
        </div>
    );
};
