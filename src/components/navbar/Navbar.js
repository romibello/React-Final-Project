import React from 'react';
import './header.scss';
import logo from '../../assets/descarga.png';
import SearchBarContainer from '../searchBar/SearchBarContainer';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

function Navbar (props){
	let navbar;
	if(props.SearchBar){
		navbar = (
			<div className="HeaderContainer">
				<div className="HeaderContainer_rowCont">
					<div className="HeaderContainer_rowCont_imgContainer">
						<Link to="/">
							<img src={logo} alt="logo"></img>
						</Link>
					</div>
					<div></div>
					<div className="HeaderContainer_rowCont_SearchBarContainer">
						<SearchBarContainer></SearchBarContainer>
					</div>
				</div>
			</div>
		);
	}else {
		navbar = (
			<div className="HeaderContainer">
				<div className="HeaderContainer_imgContainer">
					<Link to="/">
						<img src={logo} alt="logo" className="img"></img>
					</Link>
				</div>
			</div>
		);
	}

	return navbar;
}

const mapStateToProps = (state) =>{
	return{
		SearchBar: state.SearchBar
	}
}

Navbar.defaultProps = {
	SearchBar: false
}

export default connect(mapStateToProps, null) (Navbar);