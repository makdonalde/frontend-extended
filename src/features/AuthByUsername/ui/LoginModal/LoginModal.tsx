import { Suspense } from 'react';
import { Loader, Modal } from 'shared/ui';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void
}
export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
    return (
        <Modal
            lazy
            isOpen={isOpen}
            onClose={onClose}
        >
            <Suspense fallback={<Loader />}>
                <LoginFormAsync />
            </Suspense>
        </Modal>
    );
};
