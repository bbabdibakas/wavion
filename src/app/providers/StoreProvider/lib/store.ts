import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { RootState } from "./RootSate";
import { authFormReducer } from "features/AuthByUsername";
import { userReducer } from "entities/User";
import { profileReducer } from "entities/Profile";

export function createReduxStore(initialState?: RootState) {
    const rootReducers: ReducersMapObject<RootState> = {
        authForm: authFormReducer,
        user: userReducer,
        profile: profileReducer
    }

    const store = configureStore({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState
    })

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
