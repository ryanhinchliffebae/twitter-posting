import {configureStore} from "@reduxjs/toolkit";
import inputReducer from './redux/inputSlice'

export const store = configureStore({
    reducer: {
        input: inputReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;