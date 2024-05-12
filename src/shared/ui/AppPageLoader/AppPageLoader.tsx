import { classNames } from 'shared/lib/classNames/classNames'
import { AppLoader } from '../AppLoader/AppLoader'
import cls from './AppPageLoader.module.scss'

interface AppPageLoaderProps {
	className?: string
}

export const AppPageLoader = (props: AppPageLoaderProps) => {
	const {
		className,
	} = props

	return (
		<div
			className={classNames(cls.AppPageLoader, [className])}
		>
			<AppLoader />
		</div >
	)
}