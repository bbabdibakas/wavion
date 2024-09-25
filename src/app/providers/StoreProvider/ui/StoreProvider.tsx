import { ReactNode } from "react";
import { RootState } from "../lib/RootSate";
import { createReduxStore } from "../lib/store";
import { Provider } from "react-redux";

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: RootState;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const {
        children,
        initialState,
    } = props;


    const store = createReduxStore(
        initialState as RootState,
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
