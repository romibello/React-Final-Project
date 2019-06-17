import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cards from './Cards';
import {getArtistsAlbum} from '../actions/action';
import { connect } from "react-redux";

class List extends Component {
  constructor(props){
    super(props);    
  }

  componentDidMount() {
		const artistId = this.props.location.state.artistId;
		console.log("en artist");
		console.log(artistId);
    	this.props.getArtistsAlbum(artistId);
  }
    

    render(){
		console.log("estoy en artist");
		console.log(this.props.searchResult);
		console.log("genero del artista");
		console.log(this.props.location.state.artistGenres);
			return(
				<div className="container">
					<div className="card" >
						<div className="card-head">
						<div className="row">
							<div className="col">
								<img src={this.props.location.state.artistImg} alt="img" className="img-fluid"></img>
							</div>
							<div className="col-6">
								<h4>{this.props.location.state.artistName}</h4>
								<p>{this.props.location.state.artisGenre}</p>
							</div>
						</div>
						</div>
						<div className="card-body">
						<Cards></Cards>
						</div>
					</div>
				</div>
			)
	
		}
}

const mapStateToProps = (state) => {
  return {
	  textToSearch: state.textToSearch,
	  searchResult: state.searchResult
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getArtistsAlbum: (query) => dispatch(getArtistsAlbum(query))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);