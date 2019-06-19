import React from 'react';
import logo from '../assets/descarga.png';
import SearchBarContainer from './SearchBarContainer';
import { Link } from 'react-router-dom'

function Navbar (){
	return(
		<header className="navbar bg-dark row">
			<div className="container logo-container">
			<Link to={{pathname: '/'}}>
				<img src={logo} alt="logo" className="img-fluid mx-auto d-block"></img>
			</Link>
			</div>
			<i className="fa fa-search fa-2x fa-lg" hidden/>
			
		</header>
	)
}

export default Navbar;