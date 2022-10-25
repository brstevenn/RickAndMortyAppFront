import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from '../../redux/actions/index'
import Characters from '../Characters/Characters'

import './Home.css'

const Home = () => {
	return (
		<div>
			<div className="titleHome" ><h1 className="RickTitle" >Rick &nbsp;</h1><h1 className="AndTitle" >and &nbsp;</h1><h1 className="MortyTitle" >Morty &nbsp;</h1></div>
			<h1 className="AppTitle" >App</h1>
			<div className="portalHome" ><p className="textPistolaPortal" >Transport</p></div>
		</div>
	)

}

export default Home