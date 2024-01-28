import { CSSProperties } from 'react';
import { classNames } from 'shared/lib';
import cls from './Icon.module.scss';

interface IconProps {
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    size?: string | number;
    className?:string;
}

export const Icon = ({ Svg, size, className }: IconProps) => {
    const styles: CSSProperties = {
        width: size,
        height: size,
    };
    return (
        <Svg
            className={classNames(cls.Icon, {}, [className])}
            style={styles}
        >
        </Svg>
    );
};
