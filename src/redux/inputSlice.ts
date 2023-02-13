import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface InputState {
    value: string;
}

const initialState: InputState = {
    value: 'start'
}

const inputReducer = createSlice({
    name: 'input',
    initialState,
    reducers: {
        updateInput(state, action: PayloadAction<string>){
            state.value = action.payload;
        }
    }
})

export const {updateInput} = inputReducer.actions;

export default inputReducer.reducer;