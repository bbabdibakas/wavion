import cls from './AppInput.module.scss'
import { ChangeEvent, InputHTMLAttributes, useState } from 'react'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface AppInputProps extends HTMLInputProps {
	value: string
	onChange?: (value: string) => void
	className?: string
}

export const AppInput = (props: AppInputProps) => {
	const {
		className,
		value,
		onChange,
		placeholder,
		...otherProps
	} = props

	const [isFocused, setIsFocused] = useState<boolean>(false)

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value)
	}

	const onBlurHandler = () => {
		if (!value) {
			setIsFocused(false)
		}
	}

	const onFocusHandler = () => {
		setIsFocused(true)
	}

	return (
		<div className={cls.container}>
			<input
				value={value}
				onChange={onChangeHandler}
				onBlur={onBlurHandler}
				onFocus={onFocusHandler}
				className={`${cls.AppInput} ${className}`}
				{...otherProps}
			/>
			<div className={`${cls.placeholder} ${isFocused ? cls.focused : 'undefined'}`}>
				{placeholder}
			</div>
		</div>

	)
}