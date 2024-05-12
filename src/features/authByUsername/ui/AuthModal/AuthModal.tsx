import { AppModal } from 'shared/ui/AppModal/AppModal'
import { AuthFormAsync } from '../AuthForm/AuthForm.async'
import { Suspense } from 'react'
import { AppLoader } from 'shared/ui/AppLoader/AppLoader'

interface AuthModalProps {
	className?: string
	isModalOpen: boolean
	onClose: () => void
}

export const AuthModal = (props: AuthModalProps) => {
	const {
		className,
		isModalOpen,
		onClose
	} = props

	return (
		<AppModal isModalOpen={isModalOpen} onClose={onClose} className={className}>
			<Suspense fallback={<AppLoader />}>
				<AuthFormAsync onSuccess={onClose} />
			</Suspense>
		</AppModal>
	)
}