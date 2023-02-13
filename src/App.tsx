import React from 'react';
import './App.css';
import PostTwitterInput from "./components/PostTwitterInput/PostTwitterInput";
import PostTwitterButton from "./components/PostTwitterButton/PostTwitterButton";

function App() {
  return (
    <div className="App">
      <PostTwitterInput> </PostTwitterInput>
        <PostTwitterButton></PostTwitterButton>
    </div>
  );
}

export default App;
