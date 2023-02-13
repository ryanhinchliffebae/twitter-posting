import {configureStore, createSlice} from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'post-to-twitter',
    initialState: {
        input: ''
    },
    reducers: {
        incremented: state => { state.input += 'Input' }
    }
})

export const {incremented} = counterSlice.actions;

export const store = configureStore({
    reducer: counterSlice.reducer
});