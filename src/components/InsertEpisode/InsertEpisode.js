import React from "react";
import { useDispatch } from 'react-redux';
import * as actions from '../../redux/actions/index';

import './InsertEpisode.css'

let initialState = {
  name: "", 
  air_date: "",
  episode: ""
}

function InsertEpisode() {

  let [state, setState] = React.useState(initialState);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    setState({...state, [e.target.name]: e.target.value});
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.insertEpisode(state))
    setState({name: "", air_date: "", episode: ""})
  }

  return (
    <form className="form" onSubmit={handleSubmit} >
      <label className="label" >Name: <input className="input" type="text" name="name" value={state.name} onChange={handleChange} /></label>
      <label className="label" >Air date: <input className="input" type="text" name="air_date" value={state.air_date} onChange={handleChange}/></label>
      <label className="label" >Episode: <input className="input" type="text" name="episode" value={state.episode} onChange={handleChange}/></label>
      <button className="buttonForm" type="submit" >Insert Character</button>
    </form>
  );
}

export default InsertEpisode