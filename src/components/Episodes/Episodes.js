import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/index'
import EpisodeCard from './EpisodesCards/EpisodeCard'
import './Episodes.css'

export class Episodes extends Component {

  constructor(props){
    super(props);
    this.state = {
      one: 1,
      two: 2,
      three: 3
    }
  }

  componentDidMount(){
    this.props.getAllEpisodes(undefined)
    this.state.end = this.props.episodes.info.pages
  }

  handleClick = (e) => {
    e.preventDefault()
    if(e.target.id === "1"){
      this.props.getAllEpisodes(undefined)
    } else {
      this.props.getAllEpisodes(e.target.id)
    }
  }

  render() {
    return (
      <div className="episodes" >
        {this.props.episodes.database && this.props.episodes.database.length > 0 || this.props.episodes.newEpisodes.length > 0 ? <h3 className="newEpisodesTitle" >New Episodes</h3> : <div className="display" ></div> }
        {this.props.episodes.newEpisodes && this.props.episodes.newEpisodes.length > 0 ? <div className="newEpisodesContain" >
          <div className="episodesCard" >
            {this.props.episodes.newEpisodes && this.props.episodes.newEpisodes.map(item => {
              return(
                < EpisodeCard key={item.id} id={item.id} name={item.name} air_date={item.air_date} episode={item.episode} newEpisodes={true} />
              ) 
            })}
          </div>
        </div>: <div className="display" ></div>}
        {this.props.episodes.database && this.props.episodes.database.length > 0 ? <div className="newEpisodesContain" >
          <div className="episodesCard" >
            {this.props.episodes.database && this.props.episodes.database.map(item => {
              return(
                < EpisodeCard key={item.id} id={item.id} name={item.name} air_date={item.air_date} episode={item.episode} database={true} />
              ) 
            })}
          </div>
        </div>: <div className="display" ></div>}
        <div className="episodesPageContain" >
          <button className="episodesPageNav" id={this.state.one} onClick={this.handleClick} >{this.state.one}</button>
          <button className="episodesPageNav" id={this.state.two} onClick={this.handleClick} >{this.state.two}</button>
          <button className="episodesPageNav" id={this.state.three} onClick={this.handleClick} >{this.state.three}</button>
        </div>
        <div className="episodesCard" >
          {this.props.episodes.results && this.props.episodes.results.map(item => {
            return(
              < EpisodeCard key={item.id} id={item.id} name={item.name} air_date={item.air_date} episode={item.episode} results={true} />
            )
          })}
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    episodes: {
      database: state.episodes.database,
      newEpisodes: state.episodes.newEpisodes,
      info: state.episodes.info,
      results: state.episodes.results
    }
  }
}
export const mapDispatchToProps = (dispatch) => {
  return {
    getAllEpisodes: (props) => dispatch(actions.getAllEpisodes(props))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Episodes);



