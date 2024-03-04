import React from 'react'
import "../Styles/NoRequest.css";
import NoRequest from "../Assets/NoRequest.png"

function NORequest() {
  return (
    <div className='req-cont'>
        <p className='noreq-text'>You Have No Requests
        </p>
        <img className='no-req' src={NoRequest}/>
    </div>
  )
}

export default NORequest