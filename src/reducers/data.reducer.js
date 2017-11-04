import * as types from '../actions/action.types';
import initialState from './initial.state';

export default function DataReducer(state = initialState.data, action) {
	switch(action.type) {
		case types.DATA_LOADED:
			return Object.assign({}, state, {
				data: action.data,
				loaded: true
			});
		default:
			return state;
	}
}
