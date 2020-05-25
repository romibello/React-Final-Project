import React from 'react';
import { Link } from 'react-router-dom';

function BreadcrumbList(props){
	return(
		<li className="breadcrumb-item"><Link to="/artistList/artists"><span>Artists</span></Link></li>
	)
}

export default BreadcrumbList;