import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();

	return (
		<Navbar bg="dark" variant="dark" sticky="bottom" className="main-footer">
			<Container>
				<div>
					<span className="text-light">&copy; {currentYear} GutscheinGang</span>
				</div>
				<div>
					<Link to="/legal/imprint" className="text-secondary">
						Impressum
					</Link>
				</div>
			</Container>
		</Navbar>
	);
};

export default Footer;
