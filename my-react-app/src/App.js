// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react';

function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) =>{
     setAlert({
      msg: message,
      type: type
     })
     // here we set the time for the alert 
     setTimeout(() =>{
       setAlert(null);
     }, 1500);
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#052c46';
      document.body.style.color = 'white';
      showAlert("Dark mode enabled", "success");
    } else {

      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("light mode enabled", "success");

    }

  };

  return (
    <>

      <Navbar
        tittle="Zenvio Technologies"
        aboutText="About us"
        mode={mode}
        onToggleMode={toggleMode}/>

      <Alert alert={alert}/>

      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" />
      </div>


      
      <div className={`container my-3 text-${mode === 'dark' ? 'light' : 'dark'}`}>
        <About heading="About us" mode={mode} />
      </div>
      

    </>
  );
}
export default App;
