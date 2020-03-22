import React from 'react';
import { NavLink, RouteComponentProps, withRouter } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

interface Props extends RouteComponentProps {
	to: string;
	children: any;
	staticContext: any;
	[x: string]: any;
}

const NavItem: React.FC<Props> = (props: Props) => {
	const { to, children, location, staticContext, ...rest } = props;
	const isActive = location.pathname === to;

	return (
		<Nav.Link as={NavLink} exact to={to} active={isActive} {...rest}>
			{children}
		</Nav.Link>
	);
};

export default withRouter(NavItem);
