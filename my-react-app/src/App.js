
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';

import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    // Alert will disappear after 1.5 seconds
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {

    if (mode === 'light') {

      setMode('dark');
      document.body.style.backgroundColor = '#052c46';
      document.body.style.color = 'white';

      showAlert('Dark mode enabled', 'success');

    } else {

      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';

      showAlert('Light mode enabled', 'success');
    }
  };

  return (
    <>
      <Navbar
        tittle="TextUtils"
        aboutText="About us"
        mode={mode}
        onToggleMode={toggleMode}
      />

      <Alert alert={alert} />

      <Routes>

          <Route
            path="/"
            element={
              <div className={`container my-3 text-${mode === 'dark' ? 'light' : 'dark'}`}>
                <TextForm
                  showAlert={showAlert}
                  heading="Try TextUtils - Word counter, Character counter, Copy text"
                />
              </div>
            }
          />

          <Route
            path="/about"
            element={
              <div className={`container my-3 text-${mode === 'dark' ? 'light' : 'dark'}`}>
                <About
                  heading="About us"
                  mode={mode}
                />
              </div>
            }
          />

      </Routes>
    </>
  );
}

export default App;

