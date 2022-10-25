import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css'

import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Episodes from './components/Episodes/Episodes';
import Characters from './components/Characters/Characters';
import CharacterDetail from './components/Characters/CharactersCards/CharacterDetail'
import InsertEpisode from './components/InsertEpisode/InsertEpisode';
import InsertCharacter from './components/InsertCharacter/InsertCharacter';
import NotFound from './components/NotFound/NotFound';
//import Loader from './components/Loader/Loader';


function App() {

  return (
    <div className="app">
      <div className="divNav" >
        <Nav/>
      </div>
      <div className="routes" >
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/episodes" element={<Episodes />}/>
          <Route path="/characters" element={<Characters />}/>
          <Route path="/character/:id" element={<CharacterDetail />} />
          <Route path="/insertepisode" element={<InsertEpisode />}/>
          <Route path="/insertcharacter" element={<InsertCharacter />}/>
          <Route id="NotFound" path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
