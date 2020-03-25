import React, { Component } from 'react';
import { Form, Button, InputGroup, Row, Col } from 'react-bootstrap';
import * as Icons from 'react-feather';

import logo from '../../../resources/images/coupons-from-local-businesses.png';

import '../../../styles/login.scss';
import { history } from '../../../history';

class Login extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="login--bg">
					<div className="login--form">
						<img src={logo} alt="Logo" />
						<Form autoComplete="on" className="mt-3">
							<Row>
								<Col>
									{/* Email */}
									<Form.Group controlId="email">
										<InputGroup>
											<InputGroup.Prepend>
												<InputGroup.Text>
													<Icons.Mail />
												</InputGroup.Text>
											</InputGroup.Prepend>
											<Form.Control
												type="email"
												placeholder="Email"
												autoComplete="email"
											/>
										</InputGroup>
										<Form.Text className="text-danger text-left">
											ERROR MESSAGE
										</Form.Text>
									</Form.Group>
								</Col>
							</Row>
							<Row>
								<Col>
									{/* Password */}
									<Form.Group controlId="password">
										<InputGroup>
											<InputGroup.Prepend>
												<InputGroup.Text>
													<Icons.Lock />
												</InputGroup.Text>
											</InputGroup.Prepend>
											<Form.Control
												type="password"
												placeholder="Passwort"
												autoComplete="password"
											/>
										</InputGroup>
										<Form.Text className="text-danger text-left">
											ERROR MESSAGE
										</Form.Text>
									</Form.Group>
								</Col>
							</Row>

							{/* Buttons */}
							<Row>
								<Col>
									<Button type="submit" block className="mt-3">
										Anmelden
									</Button>
									<Button
										block
										variant="info"
										className="mt-3"
										onClick={() => history.push('/auth/signup')}
									>
										Registrieren
									</Button>
								</Col>
							</Row>
						</Form>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Login;
