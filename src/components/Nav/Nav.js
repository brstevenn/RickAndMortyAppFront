import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import './Nav.css'

function Nav() {

  const [colorHome, setcolorHome] = useState(false),
        [colorEpisodes, setcolorEpisodes] = useState(false),
        [colorCharacters, setcolorCharacters] = useState(false),
        [colorInsertEpisode, setcolorInsertEpisode] = useState(false),
        [colorInsertCharacter, setcolorInsertCharacter] = useState(false);


  const location = useLocation()

  useEffect(() => {
    if(location.pathname === "/"){
      setcolorHome(true)
      setcolorEpisodes(false)
      setcolorCharacters(false)
      setcolorInsertEpisode(false)
      setcolorInsertCharacter(false)
      document.body.style.backgroundImage = "url('../../images/633205.jpg')";
    }
    if(location.pathname === "/episodes"){
      setcolorEpisodes(true)
      setcolorHome(false)
      setcolorCharacters(false)
      setcolorInsertEpisode(false)
      setcolorInsertCharacter(false)
      document.body.style.backgroundImage = "url('../../images/633205.jpg')";
    }
    if(location.pathname === "/characters"){
      setcolorCharacters(true)
      setcolorHome(false)
      setcolorEpisodes(false)
      setcolorInsertEpisode(false)
      setcolorInsertCharacter(false)
      document.body.style.backgroundImage = "url('../../images/633205.jpg')";
    }
    if(location.pathname === "/insertepisode"){
      setcolorInsertEpisode(true)
      setcolorHome(false)
      setcolorEpisodes(false)
      setcolorCharacters(false)
      setcolorInsertCharacter(false)
      document.body.style.backgroundImage = "url('../../images/633205.jpg')";
    }
    if(location.pathname === "/insertcharacter"){
      setcolorInsertCharacter(true)
      setcolorHome(false)
      setcolorEpisodes(false)
      setcolorCharacters(false)
      setcolorInsertEpisode(false)
      document.body.style.backgroundImage = "url('../../images/633205.jpg')";
    }
  },[location])

  return (
    <div className="navBar" >
      <Link className={colorHome ? 'navHome navHomeChange' : 'navHome'} to="/">Home</Link>
      <Link className={colorEpisodes ? 'navEpisode navEpisodeChange' : 'navEpisode'} to="/episodes" >Episodes</Link>
      <Link className={colorCharacters ? 'navCharacters navCharactersChange' : 'navCharacters'} to="/characters" >Characters</Link>
      <Link className={colorInsertEpisode ? 'navInsertEpisode navInsertEpisodeChange' : 'navInsertEpisode'} to="/insertepisode" >Insert Episode</Link>
      <Link className={colorInsertCharacter ? 'navInsertCharacter navInsertCharacterChange' : 'navInsertCharacter'} to="/insertcharacter">Insert Character</Link>
    </div>
  );
}

export default Nav