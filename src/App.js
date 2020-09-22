import React from 'react';
import './App.css';
import Body from './Components/Body';
import 'bootstrap/dist/css/bootstrap.min.css';

var mouse = { x: 0, y: 0 };

function App() {
  let height = window.innerHeight;

  return (
    <div style={{ 
        position: 'fixed',
        backgroundImage: 'url(/background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        webkitBackgroundSize: 'cover',
        mozBackgroundSize: 'cover',
        oBackgroundSize: 'cover',
        height: '100%',
        width: '100%',
        overflow: 'hidden' 
    }} className="App">
      <Body />
    </div>
  );
}

export default App;
