import React from 'react';
import { Route, Switch } from 'react-router-dom';
import List from '../components/List';
import artists from '../components/Artists';
import App from '../App'
import Album from '../components/Album';
import Layout from '../components/Layout';
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
