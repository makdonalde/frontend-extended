import { FC } from 'react';
import { classNames } from 'shared/lib';
import cls from './Typography.module.scss';

export enum TypographyTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

interface TypographyProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TypographyTheme
}
export const Typography: FC<TypographyProps> = (props) => {
    const {
        className, text, title, theme = TypographyTheme.PRIMARY,
    } = props;
    return (
        <div className={classNames(cls.typography, { [cls[theme]]: true }, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};
