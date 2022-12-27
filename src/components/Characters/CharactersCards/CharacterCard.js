import React from "react";
import {useDispatch} from 'react-redux'
import * as actions from '../../../redux/actions/index'
import './CharacterCard.css'

const CharacterCard = (props) => {

  const dispatch = useDispatch();

  const handleClick= (event) => {
    event.preventDefault();
    if(props.database){
      dispatch(actions.deleteCharacterDB(props.id))
    } 
    if(props.newCharacters){
      dispatch(actions.deleteCharacterState(props.id))
    }
    if(props.results){
      dispatch(actions.deleteCharacter(props.id))
    }
  }

  return (
    <div className="characterCard">
      <button className="buttonCharacter"  onClick={handleClick}>x</button>
      <img className="imageCharacter" src={props.image} alt={props.name}/>
      <h1 className="titleCharacter" >{props.name}</h1>      
      <p className="dataCharacter" >Status: {props.status}</p>
      <p className="dataCharacter" >Species: {props.species}</p>
      <p className="dataCharacter" >Gender: {props.gender}</p>
    </div>
  );
};

export default CharacterCard;