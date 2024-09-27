import { ButtonHTMLAttributes } from "react"
import cls from './AppButton.module.scss'
import { classNames } from "shared/lib/classNames/classNames"

export enum AppButtonTheme {
    CLEAR = 'clear',
    PRIMARY = 'primary',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: AppButtonTheme
}

const AppButton = (props: AppButtonProps) => {
    const {
        children,
        className,
        theme = AppButtonTheme.CLEAR,
        ...otherProps
    } = props

    return (
        <button
            type="button"
            className={classNames(cls.AppButton, {}, [cls[theme], className])}
            {...otherProps}
        >
            {children}
        </button>
    )
}

export default AppButton