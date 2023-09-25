import { CSSProperties, ImgHTMLAttributes, useMemo } from 'react';
import { classNames } from 'shared/lib';
import cls from './Avatar.module.scss';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    size?: number;

}
export const Avatar = (props: AvatarProps) => {
    const {
        className, src, alt, size,
    } = props;
    const styles = useMemo<CSSProperties>(() => ({ width: size || 100, height: size || 100 }), [size]);
    return (
        <img
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.Avatar, {}, [className])}
        />
    );
};
