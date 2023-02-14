import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface tweets {
    tweetId: number;
    tweet: string;
}

interface state {
    value: string;
    tweetTable: Array<tweets>
}

const initialState: state = {
    value: '',
    tweetTable: []
}

const inputReducer = createSlice({
    name: 'input',
    initialState,
    reducers: {
        updateInput(state, action: PayloadAction<string>){
            state.value = action.payload;
        },
        publishTweet(state){
            const lastTweet = state.tweetTable.slice(-1).pop();
            const newTweetId = (lastTweet) ? lastTweet.tweetId + 1 : 0;

            state.tweetTable.push({
                tweetId: newTweetId,
                tweet: state.value
            })
        }
    }
})

export const {updateInput, publishTweet} = inputReducer.actions;

export default inputReducer.reducer;