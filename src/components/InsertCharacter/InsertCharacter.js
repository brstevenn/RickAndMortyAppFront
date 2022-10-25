import React from "react";
import { useDispatch } from 'react-redux';
import * as actions from '../../redux/actions/index';

import './InsertCharacter.css'

let initialState = {
  name: "",
  status: "",
  species: "",
  gender: "",
  image: "" 
}

const InsertCharacter = () => {

  let [state, setState] = React.useState(initialState);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    setState({...state, [e.target.name]: e.target.value});
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.insertCharacter(state))
    setState({name: "", status: "", species: "", gender: "", image: ""})
  }

  return (
    <form className="form" onSubmit={handleSubmit} >
      <label className="label" >Name: <input  className="input" type="text" name="name" value={state.name} onChange={handleChange} /></label>
      <label className="label" >Status: <input  className="input" type="text" name="status" value={state.status} onChange={handleChange}/></label>
      <label className="label" >Species: <input  className="input" type="text" name="species" value={state.species} onChange={handleChange}/></label>
      <label className="label" >Geneder: <input  className="input" type="text" name="gender" value={state.gender} onChange={handleChange}/></label>
      <label className="labelImage" >Image (Only URL and .png or .jpg): <input className="input" type="text" name="image" value={state.image} onChange={handleChange}/></label>
      <button  className="buttonForm" type="submit" >Insert Character</button>
    </form>
  );
}

export default InsertCharacter