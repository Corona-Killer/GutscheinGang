import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { history } from './history';
import NavBar from './components/layout/NavBar';
import AboutUs from './components/pages/AboutUs';
import AboutTheProject from './components/pages/AboutTheProject';
import FAQ from './components/pages/FAQ';
import Home from './components/pages/Home';
import Footer from './components/layout/Footer';

class App extends Component {
	// state = {
	// 	loading: false
	// };

	// componentDidMount() {
	// 	setTimeout(() => {
	// 		this.setState({ loading: false });
	// 	}, 300);
	// }

	render() {
		return (
			<React.Fragment>
				<Router history={history}>
					<NavBar />
					<main>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/about-us" component={AboutUs} />
							<Route exact path="/about-the-project" component={AboutTheProject} />
							<Route exact path="/faq" component={FAQ} />
						</Switch>
					</main>
					<Footer />
				</Router>
			</React.Fragment>
		);
	}
}

export default App;
