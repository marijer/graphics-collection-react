import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';

import Layout from './components/layout';
import Home from './components/home/';

class Routes extends React.Component {
	render () {
		return (
			<Router>
				<Layout>
					<Route exact path='/' component={Home} />
					<Route path='/test' render={() => (
						<h3>Test pagina.</h3>
					)} />
			</Layout>
		</Router>
		);
	}
};

export default Routes;
