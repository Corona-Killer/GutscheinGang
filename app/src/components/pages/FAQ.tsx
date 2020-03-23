import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import BreadCrumb from '../layout/breadcrumb/BreadCrumb';

class FAQ extends Component {
	render() {
		return (
			<React.Fragment>
				<BreadCrumb />

				<Container className="mt-3 mb-3">
					<h1>FAQ</h1>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus
						aliquid, recusandae dolores fuga voluptates consequuntur veniam ipsum
						nesciunt corrupti pariatur quia blanditiis commodi, omnis voluptatum
						impedit? Quidem dolores voluptas quasi!
					</p>
				</Container>
			</React.Fragment>
		);
	}
}

export default FAQ;
