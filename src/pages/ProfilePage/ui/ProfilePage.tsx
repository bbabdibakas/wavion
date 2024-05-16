import { ProfileDetails } from 'entities/Profile'
import { useParams } from 'react-router-dom'

const ProfilePage = () => {
	const { id } = useParams<{ id: string }>()

	return (
		<div>
			<ProfileDetails id={id} />
		</div>
	)
}

export default ProfilePage