import {combineReducers} from 'redux';

import DataReducer from './data.reducer';
import FilterReducer from './filter.reducer';

const rootReducer = combineReducers({
	DataReducer,
	FilterReducer,
});

export default rootReducer;
