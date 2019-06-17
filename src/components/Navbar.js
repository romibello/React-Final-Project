import React from 'react';
import logo from '../assets/descarga.png';


function Navbar (){
	return(
		<header className="navbar bg-dark row">
			<div className="container logo-container">
				<img src={logo} alt="logo" className="img-fluid mx-auto d-block"></img> 
			</div>
			<i className="fa fa-search fa-2x fa-lg" hidden/>
		</header>
	)
}

export default Navbar;