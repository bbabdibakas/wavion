import axios from 'axios'
import { TestAsyncThunk } from 'shared/lib/TestAsyncThunk/TestAsyncThunk';
import { authByUsername } from './authByUsername';
import { userActions } from 'entities/User';
import { authFormActions } from '../../slice/authFormSlice';

jest.mock('axios');

const mockedAxios = jest.mocked(axios)

describe('authByUsername', () => {
    test('test success login', async () => {
        const userValue = { username: '123', id: '1', profileId: '1' };
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

        const thunk = new TestAsyncThunk(authByUsername);
        const result = await thunk.callThunk({ username: '123', password: '123' });

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setUserData(userValue));
        expect(thunk.dispatch).toHaveBeenCalledWith(authFormActions.onClearState());
        expect(thunk.dispatch).toHaveBeenCalledTimes(4);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userValue);
    });

    test('test error login', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const thunk = new TestAsyncThunk(authByUsername);
        const result = await thunk.callThunk({ username: '123', password: '123' });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('some error');
    });

})