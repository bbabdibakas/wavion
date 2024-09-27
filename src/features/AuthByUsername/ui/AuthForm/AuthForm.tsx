import { useCallback } from "react"
import { authFormPassword } from "../../model/selectors/authFormPassword"
import { authFormUsername } from "../../model/selectors/authFormUsername"
import { useDispatch, useSelector } from "react-redux"
import AppInput from "shared/ui/AppInput/AppInput"
import { authFormActions } from "../../model/slice/authFormSlice"
import cls from './AuthForm.module.scss'
import AppButton, { AppButtonTheme } from "shared/ui/AppButton/AppButton"

export const AuthForm = () => {
    const dispatch = useDispatch()

    const username = useSelector(authFormUsername)
    const password = useSelector(authFormPassword)

    const onChangeUsername = useCallback((value: string) => {
        dispatch(authFormActions.setUsername(value))
    }, [dispatch, username])

    const onChangePassword = useCallback((value: string) => {
        dispatch(authFormActions.setPassword(value))
    }, [dispatch, password])

    return (
        <div className={cls.AuthForm}>
            <div className={cls.title}>
                Welcome back to Wavion
            </div>
            <AppInput value={username} onChange={onChangeUsername} placeholder="Username" className={cls.input} />
            <AppInput value={password} onChange={onChangePassword} placeholder="Password" className={cls.input} />
            <AppButton className={cls.button} theme={AppButtonTheme.PRIMARY}>
                Login
            </AppButton>
        </div>
    )
}