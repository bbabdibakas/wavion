import { AppButton, AppButtonTheme } from 'shared/ui/AppButton/AppButton'
import cls from './MainPage.module.scss'
import { useState } from 'react'
import { Counter } from 'entities/Counter'
import { AuthModal } from 'features/AuthByUsername'

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
			<Counter />
			<AuthModal isModalOpen={isModalOpen} onClose={onModalClose} />
		</div>
	)
}

export default MainPage