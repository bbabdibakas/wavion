import { getUserdata } from "./model/selectors/getUserData";
import { userActions, userReducer } from "./model/slice/userSlice";
import { UserState, User } from "./model/types/UserState";

export {
    UserState,
    User,
    userActions,
    userReducer,
    getUserdata
}