import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { AppPageLoader } from 'shared/ui/AppPageLoader/AppPageLoader'

const AppRouter = () => {
	return (
		<Routes>
			{
				Object.values(routeConfig).map(({ path, element }) => (
					<Route path={path} key={path} element={
						(
							<div className="content">
								<Suspense fallback={<AppPageLoader />}>
									{element}
								</Suspense>
							</div>
						)
					} />
				))
			}
		</Routes>
	)
}

export default AppRouter