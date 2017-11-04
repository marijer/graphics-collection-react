import React from 'react';
import PropTypes from 'prop-types';

// import '../assets/css/base.css';
// import '../assets/css/base.responsive.css';
// import '../assets/css/common.css';
// import '../assets/css/common.responsive.css';
// import '../assets/css/form.css';

class Layout extends React.Component {
	render() {
		return (
			<div className='main-content-wrapper'>
					{this.props.children}
			</div>
		);
	}
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
