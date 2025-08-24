import React from 'react'
import { useState } from 'react';



const Dark_Ligtht = () => {


    const [darkMode, setDarkMode] = useState(false);
    
    
      const toggleMode = () => {
        setDarkMode(!darkMode);
      };
    


  return (
    <div>
      

  {/* <div style={{
 
      backgroundColor: darkMode ? "#222" : "#fff",   // change bg
      color: darkMode ? "#fff" : "#000"              // change text
    }}>
      <h1>{darkMode ? "Dark Mode 🌙" : "Light Mode ☀️"}</h1>
      <button onClick={toggleMode}>
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </button>

    </div> */}
    


    </div>
  )
}

export default Dark_Ligtht
