import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import BreadCrumb from '../layout/BreadCrumb';

class AboutUs extends Component {
	render() {
		return (
			<React.Fragment>
				<BreadCrumb />
				<Container className="mt-3 mb-3">
					<h1>About Us</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum fugiat unde
						repellat, cum, hic quae sint dignissimos alias praesentium enim autem
						distinctio ducimus eligendi sed nostrum modi ullam? Iste, fuga?
					</p>
				</Container>
			</React.Fragment>
		);
	}
}

export default AboutUs;
