import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { RouteComponentProps, withRouter, Link } from 'react-router-dom';
import NavItem from './navbar/NavItem';

interface Props extends RouteComponentProps {
	//
}
interface State {
	expanded: boolean;
}

class NavBar extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			expanded: false
		};
	}

	toggleNav = () => {
		this.setState({ expanded: !this.state.expanded });
	};
	closeNav = () => {
		this.setState({ expanded: false });
	};

	render() {
		const { expanded } = this.state;

		return (
			<React.Fragment>
				<Navbar
					bg="dark"
					variant="dark"
					expand="md"
					fixed="top"
					expanded={expanded}
					onToggle={this.toggleNav}
					className="shadow"
				>
					<Container>
						<Navbar.Brand as={Link} to="/" className="p-0 m-0">
							<span className="custom-font uppercase" style={{ fontSize: '130%' }}>
								Corona Coupon
							</span>
						</Navbar.Brand>

						<Navbar.Toggle aria-controls="navbar-nav" />
						<Navbar.Collapse id="navbar-nav">
							<Nav className="ml-auto">
								<NavItem to="/">
									<span style={{ textTransform: 'uppercase' }}>
										Meine Gutscheine
									</span>
								</NavItem>
								<NavItem to="/about-us">
									<span>#AboutUs</span>
								</NavItem>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</React.Fragment>
		);
	}
}

export default withRouter(NavBar);
