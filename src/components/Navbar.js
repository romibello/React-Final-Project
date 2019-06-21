import React from 'react';
import logo from '../assets/descarga.png';
import SearchBarContainer from './SearchBarContainer';
import { Link } from 'react-router-dom'

function Navbar (){
	return(
		<div className="navbar bg-dark">
			<div className="row">
				<div className="container logo-container col-sm">
					<Link to="/">
						<img src={logo} alt="logo" className="img-fluid mx-auto d-block"></img>
					</Link>
				</div>
				<div className="col-sm-6">
					<i className="fa fa-search fa-2x fa-lg" hidden/>
					<SearchBarContainer></SearchBarContainer>
				</div>
			</div>
		</div>
	)
}

export default Navbar;