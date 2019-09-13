import React from 'react';
import Ball from './Ball'
import Lottery from './Lottery'
import './App.css';

function App() {
  return (
    <div className="App">
      <Lottery/>
      <Lottery title = 'BC-Daily' maxNum = {10} numBalls = {4}/>

    </div>
  );
}

export default App;
