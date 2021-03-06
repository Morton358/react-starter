import React from 'react';
import Header from './elements/Header';
import Footer from './elements/Footer';
import SystemNotifications from './elements/SystemNotifications';

class App extends React.Component {
	constructor (props) {
		super(props);
	}

	static propTypes = {
		children: React.PropTypes.object.isRequired
	};

	render () {
		return (
			<div className="app">
				<Header />
				<main className="app__content">
					<div className="app__container">
						{this.props.children}
					</div>
				</main>
				<Footer />
				<SystemNotifications />
			</div>
		);
	}
}

export default App;
