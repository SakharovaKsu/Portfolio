import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Skills from './Components/Skills/Skills';
import Portfolio from './Components/Portfolio/Portfolio';
import Hiring from './Components/Hiring/Hiring';
import Contacts from './Components/Contacts/Contacts';
import Footer from './Components/Footer/Footer';
import AboutMe from './Components/AboutMe/AboutMe';

function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <AboutMe/>
        <Skills/>
        <Portfolio/>
        <Hiring/>
        <Contacts/>
        <Footer/>
    </div>
  );
}

export default App;
