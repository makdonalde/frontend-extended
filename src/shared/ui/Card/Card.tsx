import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from 'shared/lib';
import cls from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement>{
    className ?: string;
    children:ReactNode;
}

export const Card = memo((props: CardProps) => {
    const { className, children, ...other } = props;
    return (
        <div {...other} className={classNames(cls.Card, {}, [className])}>
            {children}
        </div>
    );
});
