import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";

import './NotFound.css'


function NotFound() {

  const location = useLocation()

  useEffect(() => {
    if(location.key === "default"){
      document.body.style.backgroundImage = "url('https://images.alphacoders.com/876/876589.jpg')";
    }
  }, [location])

  return (
    <div>
      <h1 className="titleNotFound" >Ups! You are lost in space, we cannot find the location you are looking for</h1>
    </div>
  )
}

export default NotFound;