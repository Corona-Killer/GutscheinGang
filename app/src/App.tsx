import React, { Component } from 'react';
import { Router, Switch, Route, Redirect, RouteComponentProps } from 'react-router-dom';
import { history } from './history';
import NavBar from './components/layout/NavBar';
import AboutUs from './components/pages/AboutUs';
import Home from './components/pages/Home';
import Footer from './components/layout/Footer';
import Imprint from './components/pages/legal/imprint';
import Login from './components/pages/auth/Login';
import Signup from './components/pages/auth/Signup';
import { Authentication } from './interfaces/authentication';
import userService from './services/user';
import store from './store';

interface Props {}
interface State {
	authentication: Authentication;
}

const initState: State = {
	authentication: {
		authenticated: false,
		loading: true,
		user: null
	}
};

class App extends Component<Props, State> {
	removeAuthListener: any;

	//SECTION React lifecycle

	constructor(props: Props) {
		super(props);
		this.state = initState;
	}

	async UNSAFE_componentWillMount() {
		this.removeAuthListener = await userService.onAuthStateChange(async (user) => {
			if (user) {
				this.setState({
					authentication: {
						authenticated: true,
						loading: false,
						user: user
					}
				});

				// store.dispatch()
			} else {
				this.setState({
					authentication: {
						authenticated: false,
						loading: false,
						user: null
					}
				});
			}
		});
	}

	componentWillUnmount() {
		this.removeAuthListener();
	}

	//!SECTION

	render() {
		const { authentication } = this.state;

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
