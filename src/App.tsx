import React from 'react';
import './App.css';
import PostTwitterInput from "./components/PostTwitterInput/PostTwitterInput";
import PostTwitterButton from "./components/PostTwitterButton/PostTwitterButton";
import HistoryOfTweetsTable from "./components/HistoryOfTweetsTable/HistoryOfTweetsTable";
import {incremented, store} from "./redux/redux";

store.subscribe(() => console.log(store.getState()))
store.dispatch(incremented())

function App() {

  return (
    <div className="App">
        <div className="post-tweet-section">
            <PostTwitterInput> </PostTwitterInput>
            <PostTwitterButton></PostTwitterButton>
        </div>

        <HistoryOfTweetsTable></HistoryOfTweetsTable>
    </div>
  );
}

export default App;
