import { useCallback } from "react"
import { authFormPassword } from "../../model/selectors/authFormPassword"
import { authFormUsername } from "../../model/selectors/authFormUsername"
import { useDispatch, useSelector } from "react-redux"
import AppInput from "shared/ui/AppInput/AppInput"
import { authFormActions } from "../../model/slice/authFormSlice"
import cls from './AuthForm.module.scss'
import AppButton, { AppButtonTheme } from "shared/ui/AppButton/AppButton"
import { authByUsername } from "../../model/services/authByUsername"
import { authFormErrorMessage } from "../../model/selectors/authFormErrorMessage"
import { authFormIsLoading } from "../../model/selectors/authFormIsLoading"

export const AuthForm = () => {
    const dispatch = useDispatch()

    const username = useSelector(authFormUsername)
    const password = useSelector(authFormPassword)
    const isLoading = useSelector(authFormIsLoading)
    const errorMessage = useSelector(authFormErrorMessage)

    const onChangeUsername = useCallback((value: string) => {
        dispatch(authFormActions.setUsername(value))
    }, [dispatch, username])

    const onChangePassword = useCallback((value: string) => {
        dispatch(authFormActions.setPassword(value))
    }, [dispatch, password])

    const onLoginHandler = useCallback(() => {
        dispatch(authByUsername({ username, password }))
    }, [dispatch, username, password])

    return (
        <div className={cls.AuthForm}>
            <div className={cls.title}>
                Welcome back to Wavion
            </div>
            <div>
                {isLoading}
            </div>
            <AppInput value={username} onChange={onChangeUsername} placeholder="Username" className={cls.input} />
            <AppInput value={password} onChange={onChangePassword} placeholder="Password" className={cls.input} />
            <AppButton className={cls.button} theme={AppButtonTheme.PRIMARY} onClick={onLoginHandler}>
                Login
                <div>
                    {isLoading && 'loading'}
                </div>
            </AppButton>
        </div>
    )
}