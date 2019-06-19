import React, { Component } from 'react';
import Cards from './Cards';
import {getArtistsAlbum} from '../actions/action';
import { connect } from "react-redux";
import BreadcrumbHome from './BreadcrumbHome';
import BreadcrumbList from './BreadcrumbList';

class List extends Component {
	componentDidMount() {
		this.props.getArtistsAlbum(this.props.location.state);
	}
		
	render(){
		return(
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
					</div>
					<div className="card-body">
					<nav aria-label="breadcrumb">
						<ol className="breadcrumb">
							<BreadcrumbHome></BreadcrumbHome>
							<BreadcrumbList></BreadcrumbList>
						</ol>
					</nav>
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
		searchResult: state.searchResult,
		artistSelected: state.artistSelected
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getArtistsAlbum: (query) => dispatch(getArtistsAlbum(query))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(List);