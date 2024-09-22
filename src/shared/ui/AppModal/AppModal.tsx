import cls from './AppModal.module.scss';
import { AppPortal } from '../AppPortal/AppPortal';
import { ReactNode } from 'react';
import AppButton from '../AppButton/AppButton';
import { AppHeader } from '../AppHeader/AppHeader';
import { classNames } from 'shared/lib/classNames/classNames';

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
            <div className={classNames(cls.AppModal, { [cls.opened]: isOpen }, [className])}>
                <div className={cls.overlay}>
                    <div className={cls.content}>
                        <AppHeader>
                            <AppButton onClick={onCloseHandler}>
                                close
                            </AppButton>
                        </AppHeader>
                        <div className={cls.body}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </AppPortal>
    );
};
