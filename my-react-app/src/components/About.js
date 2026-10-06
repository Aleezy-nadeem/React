import React, { useState } from 'react';

export default function About(props) {
  
  // const isDarkMode = props.mode === 'dark';
  // const [darkMode, setDarkMode] = useState({
  //   color: isDarkMode ? 'white' : 'black',
  //   backgroundColor: isDarkMode ? '#052c46' : 'white'
  // });
 let darkMode = {
  color: props.mode === 'dark' ? 'white' : 'black',
  backgroundColor: props.mode === 'dark' ? '#0c2b3f' : 'white'}
  
  let darkMode1 ={
    color: props.mode === "dark" ? 'white' : 'black',
    backgroundColor: props.mode === "dark" ? '#0d344d' : 'white'
  }




  // const toggleStyle = () => {
  //   if (darkMode.color === 'white') {
  //     setDarkMode({
  //       color: 'black',
  //       backgroundColor: 'white'
  //     });
  //   } else {
  //     setDarkMode({
  //       color: 'white',
  //       backgroundColor: '#052c46'
  //     });
  //   }
  // };

  return (


    <div className="container" style={{ color: darkMode.color, backgroundColor: darkMode.backgroundColor }}>
      <h1 style={{ color: darkMode.color }}>{props.heading}</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" border="1px solid white">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" border style={darkMode}>
              Analyze your text
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={darkMode1}>
              TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or time to read.
            </div>
          </div>
        </div>
        <div className="accordion-item" border="1px solid white">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={darkMode}>
            Free to use 
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={darkMode1}>
             TwxtUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item" border="1px solid white">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={darkMode}>
          Browser Compatible
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={darkMode1}>
              This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
