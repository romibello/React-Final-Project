import React from 'react';
import { Route, Switch, Router  } from 'react-router-dom';
import AboutView from './aboutView/aboutView';
import List from '../components/List';
import artists from '../components/artists';
import App from '../App'
import Album from '../components/Album';

const getRoutes = function() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/about" component={AboutView} />
                <Route exact path="/artistList" component={List} />
                <Route exact path="/artists" component={artists} />
                <Route exact path="/album" component={Album} />
            </Switch>
        </div>
    )
};

export default getRoutes;
