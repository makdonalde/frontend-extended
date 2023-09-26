import { ChangeEvent, memo, useMemo } from 'react';
import { classNames } from 'shared/lib';
import cls from './Select.module.scss';

export interface SelectOption {
    value: string;
    content: string;
}
interface SelectProps {
    className?: string;
    label?: string
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void
    readonly?: boolean
}
export const Select = memo((props: SelectProps) => {
    const {
        className, label, onChange, options, value, readonly,
    } = props;

    const optionList = useMemo(() => {
        return options?.map((opt) => (
            <option className={cls.option} value={opt.value} key={opt.value}>{opt.content}</option>
        ));
    }, [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };
    return (
        <div className={classNames(cls.Wrapper, {}, [className])}>
            {label && (
                <span className={cls.label}>
                    {`${label}>`}
                </span>
            )}
            <select disabled={readonly} className={cls.select} name="" id="" value={value} onChange={onChangeHandler}>
                {optionList}
            </select>
        </div>
    );
});
