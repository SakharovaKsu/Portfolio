import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Skills from './Components/Skills/Skills';
import Portfolio from './Components/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Skills/>
        <Portfolio/>
    </div>
  );
}

export default App;
