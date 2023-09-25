import { classNames, Mods } from 'shared/lib';
import cls from './Select.module.scss';

interface SelectProps {
    className?: string;
    label?: string
}
export const Select = ({ className, label }: SelectProps) => {
    const mods: Mods = {

    };
    return (
        <div className={classNames(cls.Wrapper, {}, [className])}>
            {label && (
                <span className={cls.label}>
                    {`${label}>`}
                </span>
            )}
            <select className={cls.select} name="" id="">
                <option>123</option>
                <option>132</option>
            </select>
        </div>
    );
};
