import { useTheme } from 'app/providers/ThemeProvider';
import React, {
    FC, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib';
import { Portal } from '..';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    isOpen?: boolean;
    onClose: () => void
    lazy?: boolean
}
export const Modal: FC<ModalProps> = (props) => {
    const {
        className, onClose, isOpen, children, lazy,
    } = props;
    const { theme } = useTheme();
    const [isMounted, setIsMounted] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const timeRef = useRef<ReturnType<typeof setTimeout>>();
    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timeRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, 100);
        }
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearTimeout(timeRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.closing]: isClosing,
    };
    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    useEffect(
        () => {
            if (isOpen) {
                setIsMounted(true);
            }
        },
        [isOpen],
    );

    if (lazy && !isMounted) return null;

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className, theme])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
