import {
    ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { classNames, Mods } from 'shared/lib';
import cls from './Input.module.scss';

type HtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>
interface InputProps extends HtmlInputProps {
    value?: string | number;
    onChange?: (value: string) => void;
    className?: string;
    placeholder?: string
    autofocus?: boolean
    readonly?: boolean
}
export const Input = memo((props: InputProps) => {
    const {
        className, value, readonly, autofocus, onChange, type = 'text', placeholder, ...other
    } = props;

    const inputRef = useRef<HTMLInputElement | null>(null);
    const [caretPosition, setCaretPosition] = useState(0);
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };
    const [isFocused, setIsFocused] = useState(false);
    const onFocus = () => {
        setIsFocused(true);
    };

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            if (inputRef.current) { inputRef.current.focus(); }
        }
    }, [autofocus]);

    const onBlur = () => {
        setIsFocused(false);
    };
    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart);
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    const isCaretVisible = isFocused && !readonly;
    return (
        <div className={classNames(cls.Input, mods, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {` ${placeholder}>`}
                </div>
            )}
            <div className={cls.caretWrapper}>
                <input
                    ref={inputRef}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    onFocus={onFocus}
                    onSelect={onSelect}
                    onBlur={onBlur}
                    className={cls.input}
                    readOnly={readonly}
                    {...other}
                />
                {isCaretVisible && (
                    <span
                        style={{
                            left: `${caretPosition * 9}px`,
                        }}
                        className={cls.caret}
                    >
                    </span>
                )}
            </div>
        </div>
    );
});
