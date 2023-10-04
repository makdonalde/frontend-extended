import { FC } from 'react';
import { classNames } from 'shared/lib';
import cls from './Typography.module.scss';

export enum TypographyTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

export enum TypographyAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center'
}
export enum TypographySize {
    M = 'size_m',
    L = 'size_l',
}
interface TypographyProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TypographyTheme
    align?: TypographyAlign
    size?: TypographySize
}
export const Typography: FC<TypographyProps> = (props) => {
    const {
        className, text, title, size = TypographySize.M, align = TypographyAlign.LEFT, theme = TypographyTheme.PRIMARY,
    } = props;

    return (
        <div className={classNames('', {}, [className, cls[theme], cls[align], cls[size]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};
