import React, { Component } from 'react';
import {getAlbum} from '../actions/action';
import Audio from './Audio';
import { connect } from "react-redux";

class Album extends Component {
  constructor(props){
		super(props);
		this.playAudio=this.playAudio.bind(this);
		this.pauseAudio=this.pauseAudio.bind(this);		
	}
		
	playAudio() {
    this.refs.audRef.play();
  }
  
  pauseAudio() {
    this.refs.audRef.pause();
  }
	
  componentDidMount() {
		const artistId = this.props.location.state.artistId;
    this.props.getAlbum(artistId);
	}

	render(){
		const mySearch = this.props.songs.map((item,i)=>{
		console.log("previews");
			console.log(item.preview);
			return(
					<div className="card" key={i}>
						<div className="row">
							<div className="col">
								<h4>{item.name} {i}</h4>						
							</div>
							<Audio song={item.preview} playAudio={this.playAudio} pauseAudio={this.pauseAudio}></Audio>
						</div>
					</div>
		)
	});
		return(
			<div className="container">
				{mySearch}
			</div>
		)

	}
}

const mapStateToProps = (state) => {
  return {
    searchResult: state.searchResult,
    songs: state.songs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAlbum: (query) => dispatch(getAlbum(query))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Album);