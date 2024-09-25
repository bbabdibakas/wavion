import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { RootState } from "./RootSate";
import { authFormReducer } from "features/AuthByUsername";

export function createReduxStore(initialState?: RootState) {
    const rootReducers: ReducersMapObject<RootState> = {
        authForm: authFormReducer,
    }

    const store = configureStore({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState
    })

    return store;
}
