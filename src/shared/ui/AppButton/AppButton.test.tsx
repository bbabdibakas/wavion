import { AppButton, AppButtonTheme } from 'shared/ui/AppButton/AppButton'
import { render, screen } from '@testing-library/react'

describe('AppButton', () => {
	test('render test', () => {
		render(<AppButton>TEST</AppButton>)
		expect(screen.getByText('TEST')).toBeInTheDocument()
		// screen.debug()
	})

	test('render test with primary theme', () => {
		render(<AppButton theme={AppButtonTheme.PRIMARY}>TEST</AppButton>)
		expect(screen.getByText('TEST')).toHaveClass('primary')
	})
})