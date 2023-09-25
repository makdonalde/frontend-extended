import { FC } from 'react';
import { classNames, Mods } from 'shared/lib';
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
interface TypographyProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TypographyTheme
    align?: TypographyAlign
}
export const Typography: FC<TypographyProps> = (props) => {
    const {
        className, text, title, align = TypographyAlign.LEFT, theme = TypographyTheme.PRIMARY,
    } = props;

    return (
        <div className={classNames('', {}, [className, cls[theme], cls[align]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};
