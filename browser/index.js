'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import AllPuppies from './AllPuppies';
import store from './store';

import AllPuppiesContainer from './AllPuppiesContainer';
import SinglePuppyContainer from './SinglePuppyContainer';
import { fetchPups, fetchPuppy, clearPup } from './action-creators'


const onEnterMain = () => store.dispatch(fetchPups());
const onEnterPuppy = (nextState) => store.dispatch(fetchPuppy(nextState.params.id));
const onLeavePuppy = () => store.dispatch(clearPup());

ReactDOM.render(
  <div className="container flexbox-container">
    <div className="jumbotron">
    	<Provider store={store}>
    		<Router history={browserHistory}>
    			<Route path="/" onEnter={onEnterMain}>
    				<Route path="/puppies" component={AllPuppiesContainer} />
            <Route path="/puppies/:id" component={SinglePuppyContainer} onEnter={onEnterPuppy} onLeave={onLeavePuppy} />
    				<IndexRoute component={AllPuppiesContainer} />
    			</Route>
      	</Router>
      </Provider>
    </div>
  </div>,
  document.getElementById('app')
);