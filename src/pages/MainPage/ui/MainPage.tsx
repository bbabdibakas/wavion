import { useState } from "react"
import AppButton from "shared/ui/AppButton/AppButton"
import { AppHeader } from "shared/ui/AppHeader/AppHeader"
import AppInput from "shared/ui/AppInput/AppInput"
import { AppModal } from "shared/ui/AppModal/AppModal"

const MainPage = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    const [username, setUsername] = useState<string>('some')

    const onChangeUsername = (value: string) => {
        setUsername(value)
    }

    const onModalOpen = () => {
        setIsModalOpen(true)
    }

    const onModalClose = () => {
        setIsModalOpen(false)
    }

    return (
        <div>
            <AppHeader>
                <AppButton onClick={onModalOpen}>
                    Login
                </AppButton>
            </AppHeader>
            {
                isModalOpen && (
                    <AppModal isOpen={isModalOpen} onClose={onModalClose}>
                        <AppInput value={username} onChange={onChangeUsername} placeholder="Username"/>
                    </AppModal>
                )
            }
        </div>
    )
}

export default MainPage