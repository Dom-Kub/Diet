import React from 'react';
import './App.css';
import Router from './Router';

function App() {
  return (
    <div className="App" style={{
      width: '100vw',
      height: '100vh',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',}}>
    <Router/>
    </div>
  );
}

export default App;
