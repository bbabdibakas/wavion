import { useState } from "react"
import AppButton from "shared/ui/AppButton/AppButton"
import { AppModal } from "shared/ui/AppModal/AppModal"

const MainPage = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    const onModalOpen = () => {
        setIsModalOpen(true)
    }

    const onModalClose = () => {
        setIsModalOpen(false)
    }

    return (
        <div>
            <AppButton onClick={onModalOpen}>
                Login
            </AppButton>
            {
                isModalOpen && (
                    <AppModal isOpen={isModalOpen} onClose={onModalClose}>
                        Hello, World
                    </AppModal>
                )
            }
        </div>
    )
}

export default MainPage