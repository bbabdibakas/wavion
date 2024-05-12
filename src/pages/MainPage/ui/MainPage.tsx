import { AppButton, AppButtonTheme } from 'shared/ui/AppButton/AppButton'
import cls from './MainPage.module.scss'
import { useCallback, useState } from 'react'
import { AuthModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { getUserData } from 'entities/User/model/getUserData/getUserData'
import { userActions } from 'entities/User'

const MainPage = () => {
	const dispatch = useDispatch()
	const userData = useSelector(getUserData)

	const [isModalOpen, setIsModalOpen] = useState(false)

	const onLogout = useCallback(() => {
		dispatch(userActions.clearUserData())
	}, [dispatch])


	if (userData) {
		return (
			<div>
				<div className={cls.navbar}>
					<AppButton
						theme={AppButtonTheme.PRIMARY}
						className={cls.button}
						onClick={onLogout}
					>
						Logout
					</AppButton>
				</div>
			</div>
		)
	}

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
			{isModalOpen && <AuthModal isModalOpen={isModalOpen} onClose={onModalClose} />}
		</div>
	)
}

export default MainPage