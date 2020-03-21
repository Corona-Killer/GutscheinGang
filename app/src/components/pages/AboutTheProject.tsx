import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import BreadCrumb from '../layout/BreadCrumb';

class AboutTheProject extends Component {
	render() {
		return (
			<React.Fragment>
				<BreadCrumb />
				<Container className="mt-3 mb-3">
					<h1>About The Project</h1>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. A adipisci sequi
						iusto obcaecati, commodi fuga! Molestias, adipisci vitae, dignissimos aut
						veritatis, eius fugiat ipsum praesentium natus quae architecto sint. Minima?
					</p>
				</Container>
			</React.Fragment>
		);
	}
}

export default AboutTheProject;
