import { getUserData } from './model/getUserData/getUserData'
import { userActions, userReducer } from './model/slice/userSlice'
import { User, UserState } from './model/types/user'

export {
	User,
	UserState,
	userActions,
	userReducer,
	getUserData,
}