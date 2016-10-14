import { RECEIVE_PUPS, receivePups } from './action-creators';


const initialState = { allPuppies: [] }

export default function reducer (state = initialState, action) {
  switch (action.type) {
  	case RECEIVE_PUPS:
      return Object.assign({}, state, {allPuppies: action.puppies});

  	default: return state;
	}
}
