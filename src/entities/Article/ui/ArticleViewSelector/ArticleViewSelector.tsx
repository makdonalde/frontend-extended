import { classNames } from 'shared/lib';
import BigViewIcon from 'shared/assets/icons/big-view.svg';
import SmallViewIcon from 'shared/assets/icons/small-view.svg';
import { ArticleView } from 'entities/Article';
import { Button, ButtonTheme, Icon } from 'shared/ui';
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
    const onClick = (newView:ArticleView) => () => {
        onViewClick?.(newView);
    };
    return (
        <div className={classNames('', {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                >
                    <Icon
                        className={classNames('', { [cls.notSelected]: viewType.view !== view }, [className])}
                        Svg={viewType.icon}
                    />
                </Button>
            ))}
        </div>
    );
};
