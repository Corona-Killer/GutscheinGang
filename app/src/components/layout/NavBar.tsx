import React, { Component } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { RouteComponentProps, withRouter, Link } from 'react-router-dom';
import NavItem from './navbar/NavItem';
import NavDropdownItem from './navbar/NavDropdownItem';

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
								Unterstütze deine lokale Szene!
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
								<NavDropdown title="About" id="about-dropdown">
									<NavDropdownItem to="/about-us" onClick={this.closeNav}>
										About Us
									</NavDropdownItem>
									<NavDropdownItem
										to="/about-the-project"
										onClick={this.closeNav}
									>
										About the Project
									</NavDropdownItem>
									<NavDropdownItem to="/faq" onClick={this.closeNav}>
										FAQ
									</NavDropdownItem>
								</NavDropdown>
								<NavDropdown title="Profile" id="profile-dropdown">
									<NavDropdownItem to="/lorem">Logout</NavDropdownItem>
									<NavDropdownItem to="/lorem">Logout</NavDropdownItem>
									<NavDropdownItem to="/lorem">Logout</NavDropdownItem>
									<NavDropdownItem to="/lorem">Logout</NavDropdownItem>
								</NavDropdown>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</React.Fragment>
		);
	}
}

export default withRouter(NavBar);
