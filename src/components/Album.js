import React, { Component } from 'react';
import {getAlbum} from '../actions/action';
import {REMOVE_FAVORITE, ADD_FAVORITE} from '../constants/action-type'
import { connect } from "react-redux";
import Track from './Track';

class Album extends Component {
  constructor(props){
		super(props);
		this.state={
			audio: new Audio()
		}
		this.handleFavorite = this.handleFavorite.bind(this);
    this.handleAudio = this.handleAudio.bind(this);	
	}
	
  componentDidMount() {
		const artistId = this.props.location.state.artistId;
    this.props.getAlbum(artistId);
	}
		
	handleFavorite(trackData) {
    if (this.props.favorites.includes(trackData.id)) {
      this.props.removeFavorite(trackData.id);
    }
    else {
      let data = {
        id: trackData.id,
        trackData: {
          name: trackData.name,
          artist: trackData.artist,
          albumImg: this.props.location.state.albumImg,
          albumName: this.props.location.state.albumName
        }
			}
			console.log("agregando");
      this.props.addFavorite(data);
    }
  }

  handleAudio(previewUrl) {
    if (previewUrl) {
      if (this.state.audio.src !== previewUrl) {
        this.state.audio.pause();
      }
      if (this.state.audio.paused) {
        this.state.audio.src = previewUrl;
        this.state.audio.load();
        this.state.audio.play();
      } else {
        this.state.audio.pause();
      }
    }
  }

	render(){
		const mySearch = this.props.songs.map((item,i)=>{
			return(
				<Track song={item} key={i} onFavoriteClick={this.handleFavorite} onSongClick={this.handleAudio} favorite={this.props.favorites.includes(item.id)} />
					
		)
	});
		return(
			<div className="table-container">
				<div className="table-responsive">
					<table className="table table-striped table-hover table-dark table-sm">
					<thead className="thead-light">
						<tr>
						<th scope="col">CD1</th>
						<th scope="col"></th>
						</tr>
					</thead>
					<tbody>
						{mySearch}
					</tbody>
					</table>
				</div>
			</div>
		)

	}
}

const mapStateToProps = (state) => {
  return {
    searchResult: state.searchResult,
		songs: state.songs,
		favorites: state.favoriteTracksIds
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
		getAlbum: (query) => dispatch(getAlbum(query)),
		removeFavorite: (id) => { dispatch({ type: REMOVE_FAVORITE, payload: id})},
    addFavorite: (id) => { dispatch({ type: ADD_FAVORITE, payload: id})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Album);