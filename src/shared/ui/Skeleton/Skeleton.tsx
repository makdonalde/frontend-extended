import { CSSProperties, memo } from 'react';
import { classNames } from 'shared/lib';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string
    maxWidth?: string | number;
    maxHeight?: string | number
}

export const Skeleton = memo((props: SkeletonProps) => {
    const {
        className, border, height, width, maxHeight, maxWidth,
    } = props;
    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
        maxWidth,
        maxHeight,
    };
    return (
        <div style={styles} className={classNames(cls.Skeleton, {}, [className])}>

        </div>
    );
});
