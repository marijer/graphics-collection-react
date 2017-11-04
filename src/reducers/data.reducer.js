import * as types from '../actions/action.types';
import initialState from './initial.state';

export default function DataReducer(state = initialState.data, action) {
	switch(action.type) {
		case types.DATA_LOADED_SUCCESS:
			return Object.assign({}, state, {
				data: action.data,
				loaded: true
			});
		case types.DATA_LOADED_ERROR:
			return Object.assign({}, state, {
				loaded: false,
				error: action.error
			});
		default:
			return state;
	}
}
