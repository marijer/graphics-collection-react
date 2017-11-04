import * as types from './action.types';
import {loadGraphicsData} from '../services/data.services';

function loadDataSucces(data) {
	return {
		type: types.DATA_LOADED_SUCCESS,
		data: data
	};
}

function LoadDataError(error) {
	return {
		type: types.DATA_LOADED_ERROR,
		error: error
	};
}

export function loadData() {
	return function (dispatch) {
		return loadGraphicsData().then((data) => {
			dispatch(loadDataSucces(data));
		}).catch(error => {
			throw (error);
			dispatch(loadDataError(error.message));
		});
	};
}

