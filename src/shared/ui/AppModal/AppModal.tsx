import cls from './AppModal.module.scss';
import { AppPortal } from '../AppPortal/AppPortal';
import { ReactNode } from 'react';
import AppButton from '../AppButton/AppButton';

interface AppModalProps {
    className?: string;
    children?: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}


export const AppModal = (props: AppModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
    } = props;

    const onCloseHandler = () => {
        onClose()
    }

    return (
        <AppPortal>
            <div className={`${cls.AppModal} ${isOpen ? cls.opened : undefined} ${className}`}>
                <div className={cls.overlay}>
                    <div className={cls.content}>
                        <div className={cls.header}>
                            <AppButton onClick={onCloseHandler}>
                                close
                            </AppButton>
                        </div>
                        <div className={cls.body}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </AppPortal>
    );
};
