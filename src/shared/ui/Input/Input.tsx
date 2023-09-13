import {
    ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib';
import cls from './Input.module.scss';

type HtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>
interface InputProps extends HtmlInputProps {
    value?: string;
    onChange?: (value: string) => void;
    className?: string;
    placeholder?: string
    autofocus?: boolean
}
export const Input = memo((props: InputProps) => {
    const {
        className, value, autofocus, onChange, type = 'text', placeholder, ...other
    } = props;

    const inputRef = useRef<HTMLInputElement>();
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
            inputRef.current.focus();
        }
    }, [autofocus]);

    const onBlur = () => {
        setIsFocused(false);
    };
    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart);
    };
    return (
        <div className={classNames(cls.Input, {}, [className])}>
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
                    {...other}
                />
                {isFocused && (
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
