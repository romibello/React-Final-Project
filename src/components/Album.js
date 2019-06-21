import React, { Component } from 'react';
import {getAlbum,addFavorite, removeFavorite} from '../actions/action';
import { connect } from "react-redux";
import Track from './Track';
import Breadcrumb from './Breadcrumb';

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
	

	componentDidUpdate(prevProps){
		if (this.props.location.state.artistId !== prevProps.location.state.artistId) {
      		this.props.getAlbum(this.props.location.state.artistId);
    	}
	}

	handleFavorite(trackData) {
    if (this.props.favorites.includes(trackData.id) && typeof this.props.favorites !== undefined) {
      this.props.removeFavorite(trackData.id);
    }
    else {
      let data = {
		id: trackData.id,
        trackData: {
		  name: trackData.name,
		  artist:this.props.location.state.artistName,
          albumImg: this.props.location.state.artistImg,
          albumName: this.props.location.state.artistName
        }
			}
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
		let mySearch;
		if(this.props.songs){mySearch = this.props.songs.map((item)=>{
			return(
				<Track song={item} key={item.id}
				onFavoriteClick={this.handleFavorite}
				 onSongClick={this.handleAudio}
				 />
					
		)
	});}else{
		mySearch= <tr> <td> <p>  </p> </td> </tr>
	}
		return(
			<React.Fragment>
			<div className="container">
				<div className="card" >
					<div className="card-head">
						<div className="row">
							<div className="col">
								<img src={this.props.location.state.artistImg} alt="img" className="img-fluid"></img>
							</div>
							<div className="text-center col-6">
								<h4>{this.props.location.state.artistName}</h4>
								<p>{this.props.location.state.artisGenre}</p>
							</div>
						</div>
						<Breadcrumb state={this.props.location.state.artistName}></Breadcrumb>
					</div>
					<div className="card-body">
						<div className="table-container">
							<div className="table-responsive">
								<table className="table table-striped table-hover table-dark table-sm">
									<thead className="thead-light">
										<tr>
										<th scope="col">Album</th>
										<th scope="col"></th>
										</tr>
									</thead>
									<tbody>
										{mySearch}
									</tbody>
								</table>
							</div>
						</div>
					
					</div>
				</div>
			</div>
			</React.Fragment>
		)

	}
}

const mapStateToProps = (state) => {
  return {
    searchResult: state.searchResult,
		songs: state.songs,
		artist: state.artistSelected,
		favorites: state.favoriteTracksIds
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
		getAlbum: (query) => dispatch(getAlbum(query)),
		removeFavorite: (id) => { dispatch(removeFavorite(id))},
    addFavorite: (id) => { dispatch(addFavorite(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Album);