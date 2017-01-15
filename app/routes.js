import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app.js';
import StreamsContainer from './containers/StreamsContainer.js';
import AddStreamContainer from './containers/AddStreamContainer.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={StreamsContainer}/>
    <Route path="/stream/new" component={AddStreamContainer}/>
    <Route path="/stream/view/:id" component={AddStreamContainer}/>
    <Route path="/academy" component={AddStreamContainer}/>
  </Route>
)