import React from 'react'
import { useNavigate } from 'react-router-dom';

const Support = () => {

    const navigate = useNavigate();

    function clickHandler(){
        //mov to about page
        navigate("/labs");

    }

    function  backkHandler(){
        navigate(-1);
    }
  return (
    <div>
            This is  Support Page
          <br/><button onClick={clickHandler}>Move to Labs page</button>
          <br/>
          <button onClick={backkHandler}>Go Back</button>

    </div>
  )
}

export default Support
