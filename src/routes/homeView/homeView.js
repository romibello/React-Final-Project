import React, { Component } from 'react';
import './home.css';
import { connect } from 'react-redux';
import FavoritesList from '../../components/FavoritesList';
import SearchBarContainer from '../../components/SearchBarContainer';

class HomeView extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<React.Fragment>
			<div className="container-fluid">
				<div className="container-fluid">
					<div className="card">
						<div className="card-head">
							<h1>Welcome to Spotisearch</h1>
						</div>
						<div className="card-body">
						<p>Search your favourite songs over spotify, just enter an artist's name in the following search box and enjoy!</p>
						<SearchBarContainer></SearchBarContainer>
						</div>
						<div className="card-Footer">
							{typeof this.props.favoritesId !== 'undefined' ? <FavoritesList props={{favorites: this.props.favorites, favoritesId: this.props.favoritesId}} /> : null}
						</div>
					</div>
				</div>
				<footer className="navbar bg-dark row"></footer>
			</div>
			</React.Fragment>
		);
	}
}


const mapStateToProps = (state) => {
    return {
			textToSearch: state.textToSearch,
      favoritesId: state.favoriteTracksIds,
      favorites: state.favoriteTracks
    }
	
}


export default connect(mapStateToProps, null)(HomeView);
