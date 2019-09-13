import React from 'react';
import Ball from './Ball'
import Lottery from './Lottery'
import './App.css';

function App() {
  return (
    <div className="App">
      <Lottery/>
      <Lottery title = 'BC-Daily-Grand' maxNum = {49} numBalls = {6}/>

    </div>
  );
}

export default App;
