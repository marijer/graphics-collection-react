import * as types from './action.types';

function DataLoaded(data) {
	return {
		type: types.DATA_LOADED,
		data: data
	};
}

export function loadData() {
	return function (dispatch) {
		dispatch(twitterDataLoaded(data));
	};
}

