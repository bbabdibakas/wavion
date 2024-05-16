import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Sidebar } from 'widgets/Sidebar'

describe('Sidebar', () => {
	test('render test', () => {
		render(
			<BrowserRouter>
				<Sidebar />
			</BrowserRouter>
		)
		expect(screen.getByTestId('sidebar')).toBeInTheDocument()
		// screen.debug()
	})
})