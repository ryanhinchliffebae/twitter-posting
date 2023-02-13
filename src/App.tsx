import React from 'react';
import './App.css';
import PostTwitterInput from "./components/PostTwitterInput/PostTwitterInput";
import PostTwitterButton from "./components/PostTwitterButton/PostTwitterButton";

function App() {
  return (
    <div className="App">
        <div className="post-tweet-section">
            <PostTwitterInput> </PostTwitterInput>
            <PostTwitterButton></PostTwitterButton>
        </div>
    </div>
  );
}

export default App;
