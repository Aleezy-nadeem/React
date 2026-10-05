// import logo from './logo.svg';

import './App.css';

import Navbar from './components/Navbar';

import TextForm from './components/TextForm';

import About from './components/About';

import React, { useState } from 'react';

function App() {

  const [mode, setMode] = useState('light');

  const toggleMode = () => {

    if (mode === 'light') {

      setMode('dark');

      document.body.style.backgroundColor = '#052c46';
      document.body.style.color = 'white';

    } else {

      setMode('light');

      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';

    }

  };

  return (
    <>

      <Navbar
        tittle="Zenvio Technologies"
        aboutText="About us"
        mode={mode}
        onToggleMode={toggleMode}
      />

      <div className="container my-3">

        <TextForm heading="Enter the text to analyze below" />

      </div>


      
      <div className="container my-3 text-light">

        <About heading="About us"/>

      </div>
      

    </>
  );
}

export default App;