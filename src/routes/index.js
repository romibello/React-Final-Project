import React from 'react';
import { Route, Switch } from 'react-router-dom';
import List from '../components/List';
import artists from '../components/artists';
import App from '../App'
import Album from '../components/Album';

const getRoutes = function() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={App} />
				<Route exact path="/artistList" component={List} />
				<Route exact path="/artistList/artists" component={artists} />
				<Route exact path="/artistList/artists/album" component={Album} />
			</Switch>
		</div>
	)
};

export default getRoutes;
