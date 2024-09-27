import { getUserdata, userActions } from "entities/User"
import { AuthModal } from "features/AuthByUsername"
import { useCallback, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import AppButton, { AppButtonTheme } from "shared/ui/AppButton/AppButton"
import { AppHeader } from "shared/ui/AppHeader/AppHeader"

const MainPage = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const dispatch = useDispatch()
    
    const userData = useSelector(getUserdata)

    const onModalOpen = () => {
        setIsModalOpen(true)
    }

    const onModalClose = () => {
        setIsModalOpen(false)
    }
    
    const onLogoutHandler = useCallback(() => {
        dispatch(userActions.resetUserData())
    }, [dispatch])

    if (userData) {
        return (
            <div>
                <AppHeader>
                    <AppButton onClick={onLogoutHandler} theme={AppButtonTheme.PRIMARY}>
                        Logout
                    </AppButton>
                </AppHeader>
            </div>
        )
    }

    return (
        <div>
            <AppHeader>
                <AppButton onClick={onModalOpen} theme={AppButtonTheme.PRIMARY}>
                    Login
                </AppButton>
            </AppHeader>
            {
                isModalOpen && (<AuthModal isOpen={isModalOpen} onClose={onModalClose} />)
            }
        </div>
    )
}

export default MainPage

function dispatch() {
    throw new Error("Function not implemented.")
}
