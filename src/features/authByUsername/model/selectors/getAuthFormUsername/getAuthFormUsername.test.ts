import { RootState } from 'app/providers/StoreProvider'
import { getAuthFormUsername } from './getAuthFormUsername'

describe('getAuthFormUsername', () => {
    test('test with state', () => {
        const state: DeepPartial<RootState> = {
            authForm: {
                username: 'some username'
            }
        }
        expect(getAuthFormUsername(state as RootState)).toEqual('some username')
    })

    test('test without state', () => {
        expect(getAuthFormUsername({} as RootState)).toEqual('')
    })
})