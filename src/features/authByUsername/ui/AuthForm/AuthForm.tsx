import { AppButton, AppButtonTheme } from 'shared/ui/AppButton/AppButton'
import cls from './AuthForm.module.scss'
import { AppInput } from 'shared/ui/AppInput/AppInput'
import { useSelector } from 'react-redux'
import { useCallback, useEffect } from 'react'
import { authFormActions } from '../../model/slice/authFormSlice'
import { AppLoader } from 'shared/ui/AppLoader/AppLoader'
import { getAuthFormIsErrorMessage } from '../../model/selectors/getAuthFormIsErrorMessage/getAuthFormIsErrorMessage'
import { getAuthFormIsLoading } from '../../model/selectors/getAuthFormIsLoading/getAuthFormIsLoading'
import { getAuthFormPassword } from '../../model/selectors/getAuthFormPassword/getAuthFormPassword'
import { getAuthFormUsername } from '../../model/selectors/getAuthFormUsername/getAuthFormUsername'
import { authByUsername } from '../../model/services/authByUsername/authByUsername'
import { useAppDispatch } from 'shared/lib/useAppDispatch/useAppDispatch'

interface AuthFormProps {
	onSuccess: () => void
}

export const AuthForm = ({ onSuccess }: AuthFormProps) => {
	const dispatch = useAppDispatch()

	const username = useSelector(getAuthFormUsername)
	const password = useSelector(getAuthFormPassword)
	const isLoading = useSelector(getAuthFormIsLoading)
	const isErrorMessage = useSelector(getAuthFormIsErrorMessage)

	const onChangeUsername = useCallback((value: string) => {
		dispatch(authFormActions.onSetUsername(value))
	}, [dispatch])

	const onChangePassword = useCallback((value: string) => {
		dispatch(authFormActions.onSetPassword(value))
	}, [dispatch])

	const onLogin = useCallback(async () => {
		const result = await dispatch(authByUsername({ username, password }))
		if (result.meta.requestStatus === 'fulfilled') {
			onSuccess()
		}
	}, [dispatch, username, password])

	useEffect(() => {
		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Enter') {
				onLogin()
			}
		}

		window.addEventListener('keydown', onKeyDown)

		return () => {
			window.removeEventListener('keydown', onKeyDown)
		}
	}, [username, password])

	return (
		<div className={cls.AuthForm}>
			<div className={cls.title}>
				Welcome to Wavion
			</div>
			<AppInput
				placeholder='Username'
				value={username}
				onChange={onChangeUsername}
			/>
			<AppInput
				placeholder='Password'
				value={password}
				onChange={onChangePassword}
			/>
			<AppButton
				onClick={onLogin}
				theme={AppButtonTheme.PRIMARY}
				disabled={isLoading}
				className={cls.button}
			>
				Login
				{isLoading && <AppLoader />}
			</AppButton>
			{isErrorMessage}
		</div>
	)
}