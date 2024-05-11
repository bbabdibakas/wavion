import cls from './AppLoader.module.scss'

interface AppAppLoaderProps {
    className?: string
}

export const AppLoader = (props: AppAppLoaderProps) => {
	const {
		className,
	} = props

	return (
		<div className={`${cls.AppLoader} ${className}`}/>
	)
}