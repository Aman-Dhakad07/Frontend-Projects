import React from 'react'
import { useNavigate } from 'react-router-dom';


const About = () => {
    const nav = useNavigate();

    function clickHandler(){
        nav("/support");
    }
  return (

    <div>
      This is About Page
          <br/><button onClick={clickHandler}>Move to Support page</button>

    </div>
  )
}

export default About
