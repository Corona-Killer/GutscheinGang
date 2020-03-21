import React, { Component } from 'react';
import { Jumbotron, Container, Form, InputGroup } from 'react-bootstrap';
import BreadCrumb from '../layout/BreadCrumb';
import * as Icons from 'react-feather';

import '../../styles/jumbotron.scss';

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
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quisquam
						repudiandae libero aut debitis consequatur officia, saepe voluptatibus optio
						ab eveniet, ad ratione corporis necessitatibus, sint modi magni laboriosam
						aliquid.
					</p>
					<p>
						Sapiente reiciendis ratione autem corrupti possimus, quaerat eum dolor,
						veniam perspiciatis dolorum mollitia nobis labore inventore fugiat odit
						deserunt nisi corporis officiis quam, consectetur unde velit? Dolorum odit
						repudiandae ad?
					</p>
					<p>
						Odio eveniet repellendus fuga esse nisi ratione nam cumque aut culpa maiores
						suscipit doloribus, incidunt enim placeat eius blanditiis iste ab quam!
						Explicabo laudantium veniam, beatae dolor id in nesciunt.
					</p>
					<p>
						Reiciendis ipsa debitis itaque ducimus optio cum eius rem nulla animi
						doloremque unde cupiditate autem quas, necessitatibus porro aspernatur saepe
						quia, deleniti nihil! Eveniet, magni. Cupiditate accusamus tenetur
						praesentium esse?
					</p>
					<p>
						Mollitia maiores animi dolores odio rem distinctio quis veritatis ratione
						provident excepturi ab, delectus, saepe nisi unde perferendis sequi? Labore
						cupiditate veniam facere dolorem blanditiis molestiae, enim animi sint
						numquam.
					</p>
				</Container>
			</React.Fragment>
		);
	}
}

export default Home;
