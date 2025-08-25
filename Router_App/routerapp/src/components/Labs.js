import React from 'react'
import { useNavigate } from 'react-router-dom'


const Labs = () => {

    const navigate = useNavigate();

    function clickHandler(){
        //mov to about page
        navigate("/about");

    }
  return (
    <div>
            This is Lab  Page

    <br/><button onClick={clickHandler}>Move to about page</button>

    </div>
  )
}

export default Labs
