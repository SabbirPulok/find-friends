import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Friend from './Components/Friends/Friend';

function App() {
  return (
    <div>
      <Header></Header>
      <Friend></Friend>
    </div>
  );
}

export default App;
