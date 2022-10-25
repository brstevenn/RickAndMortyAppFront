import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/index'
import CharacterCard from './CharactersCards/CharacterCard'
import './Characters.css'

export class Characters extends Component {

  constructor(props){
    super(props);
    this.state = {
      first: 1,
      one: 2,
      two: 3,
      three: 4,
      end: 5,
    }
  }

  componentDidMount(){
    this.props.getAllCharacters(undefined)
    this.state.end = this.props.characters.info.pages
  }

  handleClick = (e) => {
    e.preventDefault()
    if(e.target.id === "1"){
      this.props.getAllCharacters(undefined)
    } else {
      this.props.getAllCharacters(e.target.id)
    }
  }

  handleClickSlide = (e) => {
    e.preventDefault()
    if(e.target.id === "prev" && this.state.one > 2){
      this.setState({
        first: this.state.first,
        one: this.state.one - 1,
        two: this.state.two - 1,
        three: this.state.three - 1,
        end: this.state.end,
      })
    } if(e.target.id === "next" && this.state.three < this.state.end - 1){
      this.setState({
        first: this.state.first,
        one: this.state.one + 1,
        two: this.state.two + 1,
        three: this.state.three + 1,
        end: this.state.end,
      })
    }
  }

  render() {
    return (
      <div className="characters" >
        {this.props.characters.database && this.props.characters.database.length > 0 || this.props.characters.newCharacters.length > 0 ? <h3 className="newCharactersTitle" >New characters</h3> : <div className="display" ></div> }
        {this.props.characters.newCharacters && this.props.characters.newCharacters.length > 0 ? <div className="newCharactersContain" >
          <div className="charactersCard" >
            {this.props.characters.newCharacters && this.props.characters.newCharacters.map(item => {
              return(<CharacterCard key={item.id} id={item.id} image={item.image} name={item.name} status={item.status} species={item.species} gender={item.gender} newCharacters={true} />)
            })}
          </div>
        </div> : <div className="display" ></div>}
        {this.props.characters.database && this.props.characters.database.length > 0 ? <div className="newCharactersContain">
          <div className="charactersCard" >
            {this.props.characters.database && this.props.characters.database.map(item => {
              return(
                < CharacterCard key={item.id} id={item.id} image={item.image} name={item.name} status={item.status} species={item.species} gender={item.gender} database={true} />
              )
            })}
          </div>
        </div> : <div className="display" ></div>}
        <div className="charactersPageContain" >
          <button className="characterPageNav" id={this.state.first} onClick={this.handleClick} >{this.state.first}</button>
          <button className="characterPagePrevNav" id="prev" onClick={this.handleClickSlide} >{"<"}</button>
          <button className="characterPageNav" id={this.state.one} onClick={this.handleClick} >{this.state.one}</button>
          <button className="characterPageNav" id={this.state.two} onClick={this.handleClick} >{this.state.two}</button>
          <button className="characterPageNav" id={this.state.three} onClick={this.handleClick} >{this.state.three}</button>
          <button className="characterPageNextNav" id="next" onClick={this.handleClickSlide} >{">"}</button>
          <button className="characterPageNav" id={this.state.end} onClick={this.handleClick} >{this.state.end}</button>
        </div>
        <div className="charactersCard" >
          {this.props.characters.results && this.props.characters.results.map(item => {
            return(
              < CharacterCard key={item.id} id={item.id} image={item.image} name={item.name} status={item.status} species={item.species} gender={item.gender} results={true} />
            )
          })}
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    characters: {
      database: state.characters.database,
      newCharacters: state.characters.newCharacters,
      info: state.characters.info,
      results: state.characters.results
    }
  }
}
export const mapDispatchToProps = (dispatch) => {
  return {
    getAllCharacters: (props) => dispatch(actions.getAllCharacters(props))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Characters);