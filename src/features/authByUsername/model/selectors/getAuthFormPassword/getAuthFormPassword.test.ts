import { RootState } from 'app/providers/StoreProvider'
import { getAuthFormPassword } from './getAuthFormPassword'

describe('getAuthFormPassword', () => {
    test('test with state', () => {
        const state: DeepPartial<RootState> = {
            authForm: {
                password: 'some password'
            }
        }
        expect(getAuthFormPassword(state as RootState)).toEqual('some password')
    })

    test('test without state', () => {
        expect(getAuthFormPassword({} as RootState)).toEqual('')
    })
})