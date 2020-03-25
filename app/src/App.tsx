import React, { Component } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { history } from './history';
import NavBar from './components/layout/NavBar';
import AboutUs from './components/pages/AboutUs';
import Home from './components/pages/Home';
import Footer from './components/layout/Footer';
import Imprint from './components/pages/legal/imprint';
import Login from './components/pages/auth/Login';
import Signup from './components/pages/auth/Signup';

class App extends Component {
	// state = {
	// 	loading: false
	// };

	// componentDidMount() {
	// 	setTimeout(() => {
	// 		this.setState({ loading: false });
	// 	}, 300);
	// }

	// componentDidMount() {
	// 	const elem = window.document.getElementsByTagName('body')[0];
	// 	elem.setAttribute('style', '');
	// }

	render() {
		return (
			<React.Fragment>
				<Router history={history}>
					<NavBar />
					<main>
						<Switch>
							<Route exact path="/auth/login" component={Login} />
							<Route exact path="/auth/signup" component={Signup} />

							<Route exact path="/" component={Home} />
							<Route exact path="/about-us" component={AboutUs} />
							<Route exact path="/legal/imprint" component={Imprint} />

							<Redirect to="/" />
						</Switch>
					</main>
					<Footer />
				</Router>
			</React.Fragment>
		);
	}
}

export default App;
