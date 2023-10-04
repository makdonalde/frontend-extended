import { useCallback } from 'react';
import { classNames } from 'shared/lib';
import CopyIcon from 'shared/assets/icons/copy.svg';
import { Button, ButtonTheme } from '../Button/Button';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string;
    text: string
}

export const Code = ({ className, text }: CodeProps) => {
    const onCopy = useCallback(
        () => {
            navigator.clipboard.writeText(text);
        },
        [text],
    );

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button onClick={onCopy} theme={ButtonTheme.CLEAR} className={cls.copyBtn}>
                <CopyIcon className={cls.icon} />
            </Button>
            <code>
                {text}
            </code>
        </pre>
    );
};
