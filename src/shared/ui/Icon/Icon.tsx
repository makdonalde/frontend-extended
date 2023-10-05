import { CSSProperties } from 'react';
import cls from './Icon.module.scss';

interface IconProps {
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    size?: string | number;
}

export const Icon = ({ Svg, size }: IconProps) => {
    const styles: CSSProperties = {
        width: size,
        height: size,
    };
    return (
        <Svg
            style={styles}
            className={cls.Icon}
        >
        </Svg>
    );
};
