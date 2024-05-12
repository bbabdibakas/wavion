import { RootState } from 'app/providers/StoreProvider'
import { getAuthFormIsLoading } from './getAuthFormIsLoading'

describe('getAuthFormIsLoading', () => {
    test('test with state', () => {
        const state: DeepPartial<RootState> = {
            authForm: {
                isLoading: true
            }
        }
        expect(getAuthFormIsLoading(state as RootState)).toEqual(true)
    })

    test('test without state', () => {
        expect(getAuthFormIsLoading({} as RootState)).toEqual(false)
    })
})