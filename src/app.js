import React from 'react';
import {render} from 'react-dom';

import configureStore from './store/configure.store';
import { Provider } from 'react-redux';
import {loadData} from './actions/data.actions';
import Routes from './routes';

const store = configureStore();

store.dispatch(loadData());

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		return (
			<Provider store={store}>
				<Routes />
			</Provider>
		);
	}
};

render(<App />, document.getElementById('app'));