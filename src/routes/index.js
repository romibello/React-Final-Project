import React from 'react';
import { Route, Switch } from 'react-router-dom';
//@routes
import List from './list/List';
import artists from './artist/artists';
import App from '../App'
import Album from '../routes/Album/album';
import Layout from '../components/layout/Layout';
import NotFound from '../pages/NotFound';

const getRoutes = function() {
	return (
		<Layout>
			<Switch>
				<Route exact path="/" component={App} />
				<Route exact path="/artistList" component={List} />
				<Route exact path="/artistList/artists" component={artists} />
				<Route exact path="/artistList/artists/album" component={Album} />
				<Route component={NotFound}/>
			</Switch>
		</Layout>
	)
};

export default getRoutes;
