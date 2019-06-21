import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import BreadcrumbHome from './BreadcrumbHome';

class Breadcrumb extends Component{

	render(){
		return(
			<nav aria-label="breadcrumb">
				<ol className="breadcrumb">
					<BreadcrumbHome></BreadcrumbHome>
					<li className="breadcrumb-item"><Link to="/"><span>Artists</span></Link></li>
					<li className="breadcrumb-item"><Link to={ {pathname:"/artistList/artists",
					 state: { artistId: this.props.artist.artistId, 
					 artistImg: this.props.artist.artistImg, 
					 artistName: this.props.artist.artistName, 
					 artisGenre: this.props.artist.artisGenre }} }><span>Artist</span></Link></li>
					<li className="breadcrumb-item active" aria-current="page"><span> {this.props.state} </span></li>
				</ol>
			</nav>
		)
	}
}

const mapStateToProps = (state) => {
  return {
		artist: state.artistSelected
  }
}


export default connect(mapStateToProps,null)(Breadcrumb);