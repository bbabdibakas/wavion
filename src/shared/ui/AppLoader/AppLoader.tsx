import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppLoader.module.scss'

interface AppAppLoaderProps {
	className?: string
}

export const AppLoader = (props: AppAppLoaderProps) => {
	const {
		className,
	} = props

	return (
		<div
			className={classNames(cls.AppLoader, [className])}
		/>
	)
}