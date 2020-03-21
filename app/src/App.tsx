import React, { Component } from 'react';
import { Dots } from 'react-preloaders';
import { Router, Switch, Route } from 'react-router-dom';
import { history } from './history';
import NavBar from './components/layout/NavBar';
import AboutUs from './components/pages/AboutUs';
import AboutTheProject from './components/pages/AboutTheProject';
import FAQ from './components/pages/FAQ';
import Home from './components/pages/Home';

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
				{/* <Dots customLoading={this.state.loading} /> */}
				{true && (
					<Router history={history}>
						<NavBar />
						<main>
							<Switch>
								<Route exact path="/" component={Home} />
								<Route exact path="/about-us" component={AboutUs} />
								<Route
									exact
									path="/about-the-project"
									component={AboutTheProject}
								/>
								<Route exact path="/faq" component={FAQ} />
							</Switch>
						</main>
					</Router>
				)}
			</React.Fragment>
		);
	}
}

export default App;
