import React from "react";
import {useDispatch} from 'react-redux'
import { Link } from "react-router-dom";
import * as actions from '../../../redux/actions/index'
import './EpisodeCard.css'

const EpisodeCard = (props) => {

  const dispatch = useDispatch();

  const handleClick= (event) => {
    event.preventDefault();
    if(props.database){
      dispatch(actions.deleteEpisodeDB(props.id))
    } 
    if(props.newEpisodes){
      dispatch(actions.deleteEpisodeState(props.id))
    }
    if(props.results) {
      dispatch(actions.deleteEpisode(props.id))
    }
  }

  return (
    <div className="episodeCard">
      <button className="button" onClick={handleClick}>x</button>
      <h1 className="titleEpisode" >{props.name}</h1>      
      <h3 className="dataEpisode" >Air date: {props.air_date}</h3>
      <h3 className="dataEpisode" >Episode: {props.episode}</h3>
    </div>
  );
};

export default EpisodeCard;