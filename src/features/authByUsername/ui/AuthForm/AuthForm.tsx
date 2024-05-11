import { AppButton, AppButtonTheme } from 'shared/ui/AppButton/AppButton'
import cls from './AuthForm.module.scss'
import { AppInput } from 'shared/ui/AppInput/AppInput'
import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from 'react'
import { authFormActions } from '../../model/slice/authFormSlice'
import { AppLoader } from 'shared/ui/AppLoader/AppLoader'
import { getAuthFormIsErrorMessage } from '../../model/selectors/getAuthFormIsErrorMessage/getAuthFormIsErrorMessage'
import { getAuthFormIsLoading } from '../../model/selectors/getAuthFormIsLoading/getAuthFormIsLoading'
import { getAuthFormPassword } from '../../model/selectors/getAuthFormPassword/getAuthFormPassword'
import { getAuthFormUsername } from '../../model/selectors/getAuthFormUsername/getAuthFormUsername'
import { authByUsername } from '../../model/services/authByUsername/authByUsername'

export const AuthForm = () => {
	const dispatch = useDispatch()

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
		//@ts-expect-error fix later
		await dispatch(authByUsername({ username, password }))
	}, [dispatch, username, password])

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