import { RECEIVE_PUPS, RECEIVE_PUP, CLEAR_PUP } from './action-creators';
import { combineReducers } from 'redux';


// const initialState = { allPuppies: [],
// 											 selectedPuppy: {}}

function allPuppies(state = [], action) {
	switch (action.type) {
  	case RECEIVE_PUPS:
      return action.puppies;
    default: return state;
	}
}

function selectedPuppy(state = {}, action) {
	  switch (action.type) {
    case RECEIVE_PUP:
    	return action.selectedPuppy;
    case CLEAR_PUP:
      return action.selectedPuppy;
    default: return state;
  }
}

const rootReducer = combineReducers ({
	allPuppies,
	selectedPuppy
})

export default rootReducer;