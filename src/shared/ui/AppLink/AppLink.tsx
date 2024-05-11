import { Link, LinkProps } from "react-router-dom"
import cls from './AppLink.module.scss'
import { ReactNode } from "react"

interface AppLinkProps extends LinkProps {
    children: ReactNode
    className?: string
}

export const AppLink = (props: AppLinkProps) => {
    const {
        children,
        className,
        to,
        ...otherProps
    } = props
    return (
        <Link
            to={to}
            className={`${cls.AppLink} ${className}`}
            {...otherProps}
        >
            {children}
        </Link>
    )
}