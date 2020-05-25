import React, { Component } from 'react';
import './home.scss';
import { connect } from 'react-redux';
import FavoritesList from '../../components/favoritesArtists/FavoritesList';
import SearchBarContainer from '../../components/searchBar/SearchBarContainer';
import {WELCOME_TITLE, WELCOME_TEXT} from '../../constanst/constants';

class HomeView extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<React.Fragment>
			<div className="homeContainer">
				<h1>{WELCOME_TITLE}</h1>
				<p>{WELCOME_TEXT}</p>
				<SearchBarContainer></SearchBarContainer>
				<div className="">
					{typeof this.props.favoritesId !== 'undefined' ? <FavoritesList props={{favorites: this.props.favorites, favoritesId: this.props.favoritesId}} /> : null}
				</div>
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
