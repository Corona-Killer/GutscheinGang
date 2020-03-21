import React, { Component } from 'react';
import { Jumbotron, Container, Form, InputGroup } from 'react-bootstrap';
import BreadCrumb from '../layout/BreadCrumb';
import * as Icons from 'react-feather';

import '../../styles/jumbotron.scss';
import Company from '../common/Company';

class Home extends Component {
	render() {
		return (
			<React.Fragment>
				<Jumbotron className="jumbotron-background mb-0">
					<Container className="mt-5">
						<h1 className="text-white text-center">
							Suche nach einem Geschäft in Deiner Stadt!
						</h1>
						<div className="mt-5">
							{/* <Form.Group controlId="123"> */}
							<InputGroup>
								<Form.Control type="text" placeholder="lorem ipsum" />
								<InputGroup.Append>
									<InputGroup.Text
										style={{ backgroundColor: '#fff', borderLeft: '0px' }}
									>
										<Icons.Search />
									</InputGroup.Text>
								</InputGroup.Append>
							</InputGroup>
							{/* </Form.Group> */}
						</div>
					</Container>
				</Jumbotron>
				<BreadCrumb />
				<Container>
					<h2>Content</h2>
					{/* <Company
						id="1"
						logo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Logo_Edeka.svg/1200px-Logo_Edeka.svg.png"
						city="Namborn"
						name="Edeka Schneider"
						postalCode={66640}
						sector={{ name: 'Grocery store' }}
						street="Allerburg 25"
					/> */}
				</Container>
			</React.Fragment>
		);
	}
}

export default Home;
