import { AppButton, AppButtonTheme } from 'shared/ui/AppButton/AppButton'
import cls from './MainPage.module.scss'
import { useState } from 'react'
import { AppModal } from 'shared/ui/AppModal/AppModal'

const MainPage = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const onModalOpen = () => {
        setIsModalOpen(true)
    }

    const onModalClose = () => {
        setIsModalOpen(false)
    }

    return (
        <div>
            <div className={cls.navbar}>
                <AppButton
                    theme={AppButtonTheme.PRIMARY}
                    className={cls.button}
                    onClick={onModalOpen}
                >
                    Login
                </AppButton>
            </div>
            <AppModal isModalOpen={isModalOpen} onClose={onModalClose}>
                Hello world
            </AppModal>
        </div>
    )
}

export default MainPage