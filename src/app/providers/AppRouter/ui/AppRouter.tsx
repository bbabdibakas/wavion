import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppRouterProps, routeConfig } from 'shared/config/routeConfig/routeConfig'
import { AppPageLoader } from 'shared/ui/AppPageLoader/AppPageLoader'
import { RequireAuth } from './RequireAuth'

const AppRouter = () => {
	const renderWithWrapper = (route: AppRouterProps) => {
		const element = (
			<Suspense fallback={<AppPageLoader />}>
				<div className="content">
					{route.element}
				</div>
			</Suspense>
		)

		return (
			<Route
				path={route.path}
				key={route.path}
				element={route.isRequiredAuth ? <RequireAuth>{element}</RequireAuth> : element}
			/>
		)
	}

	return (
		<Routes>
			{
				Object.values(routeConfig).map(renderWithWrapper)
			}
		</Routes>
	)
}

export default AppRouter