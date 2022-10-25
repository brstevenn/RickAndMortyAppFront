import React, { useState, useEffect } from 'react';

import './Loader.css'

function Loader() {

  const [loader, setloader] = useState(false)

  useEffect(() => {
    setTimeout(() => {setloader(true)}, 1500)
  },[])

  return (
    <div className={loader ? 'loader loaderChange' : 'loader'} >
    </div>
  );
}

export default Loader;