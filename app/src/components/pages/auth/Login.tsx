import React, { Component, RefObject, createRef } from 'react';
import { Form, Button, InputGroup, Row, Col } from 'react-bootstrap';
import * as Icons from 'react-feather';

import logo from '../../../resources/images/coupons-from-local-businesses.png';

import '../../../styles/login.scss';
import { history } from '../../../history';

interface Props {}

class Login extends Component<Props> {
	emailRef: RefObject<any>;
	passwordRef: RefObject<any>;

	constructor(props: Props) {
		super(props);

		// Bind refs
		this.emailRef = createRef();
		this.passwordRef = createRef();
	}

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
												ref={this.emailRef}
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
												ref={this.passwordRef}
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
