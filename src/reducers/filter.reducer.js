import * as types from '../actions/action.types';
import initialState from './initial.state';

export default function FilterReducer(state = initialState.filter, action) {
	switch(action.type) {
		case types.FILTER_CHANGED:
			return Object.assign({}, state, {
				data: action.data,
				loaded: true
			});
		default:
			return state;
	}
}
