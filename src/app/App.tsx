import { Sidebar } from 'widgets/Sidebar'
import { AppRouter } from 'app/providers/AppRouter'

export function App() {
	return (
		<div className="app">
			<div className="wrapper">
				<Sidebar />
				<AppRouter />
			</div>
		</div>
	)
}