import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutView from './aboutView/aboutView';
import List from '../components/List';
import artists from '../components/artists';
import App from '../App'

const getRoutes = function() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/about" component={AboutView} />
                <Route path="/artistList" component={List} />
                <Route path="/artists" component={artists} />
            </Switch>
        </div>
    )
};

export default getRoutes;
