'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import AllPuppies from './AllPuppies';
import store from './store';

import AllPuppiesContainer from './AllPuppiesContainer';
import SinglePuppyContainer from './SinglePuppyContainer';
import { fetchPups, fetchPuppy } from './action-creators'


const onEnterMain = () => store.dispatch(fetchPups());
const onEnterPuppy = (nextState) => store.dispatch(fetchPuppy(nextState.params.id));

ReactDOM.render(
  <div className="container flexbox-container">
    <div className="jumbotron">
    	<Provider store={store}>
    		<Router history={hashHistory}>
    			<Route path="/" onEnter={onEnterMain}>
    				<Route path="/puppies" component={AllPuppiesContainer} />
            <Route path="/puppies/:id" component={SinglePuppyContainer} onEnter={onEnterPuppy} />
    				<IndexRoute component={AllPuppiesContainer} />
    			</Route>
      	</Router>
      </Provider>
    </div>
  </div>,
  document.getElementById('app')
);