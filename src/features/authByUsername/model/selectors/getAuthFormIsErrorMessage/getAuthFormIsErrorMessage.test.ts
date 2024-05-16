import { RootState } from 'app/providers/StoreProvider'
import { getAuthFormIsErrorMessage } from './getAuthFormIsErrorMessage'

describe('getAuthFormIsErrorMessage', () => {
	test('test with state', () => {
		const state: DeepPartial<RootState> = {
			authForm: {
				isErrorMessage: 'some error'
			}
		}
		expect(getAuthFormIsErrorMessage(state as RootState)).toEqual('some error')
	})

	test('test without state', () => {
		expect(getAuthFormIsErrorMessage({} as RootState)).toEqual(undefined)
	})
})