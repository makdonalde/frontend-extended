import cls from './Icon.module.scss';

interface IconProps {
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = ({ Svg }: IconProps) => {
    return (
        <Svg className={cls.Icon}> </Svg>
    );
};
