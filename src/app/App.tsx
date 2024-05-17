import { Sidebar } from 'widgets/Sidebar'
import { AppRouter } from 'app/providers/AppRouter'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { userActions } from 'entities/User'

export function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(userActions.initUserData())
	}, [])

	return (
		<div className="app">
			<div className="sidebarWrapper">
				<Sidebar />
			</div>
			<div className="layoutWrapper">
				<div className="layoutBackground">
					<AppRouter />
				</div>
			</div>
		</div>
	)
}