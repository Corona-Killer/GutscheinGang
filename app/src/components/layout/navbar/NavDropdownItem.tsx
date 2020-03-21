import React from 'react';
import { NavLink, RouteComponentProps, withRouter } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

interface Props extends RouteComponentProps {
	to: string;
	children: any;
	staticContext: any;
	[x: string]: any;
}

const NavDropdownItem: React.FC<Props> = (props: Props) => {
	const { to, children, location, staticContext, ...rest } = props;
	const isActive = location.pathname === to;

	return (
		<NavDropdown.Item as={NavLink} exact to={to} active={isActive} {...rest}>
			{children}
		</NavDropdown.Item>
	);
};

export default withRouter(NavDropdownItem);
