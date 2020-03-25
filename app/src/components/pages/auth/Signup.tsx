import React, { Component, RefObject, createRef } from 'react';
import { Link } from 'react-router-dom';
import { Form, Row, Col, Button, InputGroup } from 'react-bootstrap';
import * as Icons from 'react-feather';

import logo from '../../../resources/images/coupons-from-local-businesses.png';

interface Props {}

class Signup extends Component<Props> {
	firstNameRef: RefObject<any>;
	lastNameRef: RefObject<any>;
	emailRef: RefObject<any>;
	passwordRef: RefObject<any>;
	confirmPasswordRef: RefObject<any>;

	constructor(props: Props) {
		super(props);

		// Bind refs
		this.firstNameRef = createRef();
		this.lastNameRef = createRef();
		this.emailRef = createRef();
		this.passwordRef = createRef();
		this.confirmPasswordRef = createRef();
	}

	onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const firstName = (this.firstNameRef as RefObject<HTMLInputElement>).current?.value;
		const lastName = (this.lastNameRef as RefObject<HTMLInputElement>).current?.value;
		const email = (this.emailRef as RefObject<HTMLInputElement>).current?.value;
		const password = (this.passwordRef as RefObject<HTMLInputElement>).current?.value;
		const confirmPassword = (this.confirmPasswordRef as RefObject<HTMLInputElement>).current
			?.value;

		//TODO Signup
	};

	render() {
		return (
			<React.Fragment>
				<div className="login--bg">
					<div className="signup--form">
						<img src={logo} alt="Logo" />

						<Form autoComplete="on" className="mt-3" onSubmit={this.onSubmit}>
							<Row>
								<Col>
									{/* First Name */}
									<Form.Group controlId="firstName">
										<InputGroup>
											<InputGroup.Prepend>
												<InputGroup.Text>
													<Icons.User></Icons.User>
												</InputGroup.Text>
											</InputGroup.Prepend>
											<Form.Control
												type="text"
												autoComplete="fname"
												placeholder="Vorname"
												ref={this.firstNameRef}
											/>
											<Form.Control
												type="text"
												autoComplete="lname"
												placeholder="Nachname"
												ref={this.lastNameRef}
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
												autoComplete="email"
												placeholder="Email"
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
												autoComplete="password"
												placeholder="Passwort"
												ref={this.passwordRef}
											/>
											<Form.Control
												type="password"
												autoComplete="password"
												placeholder="Passwort wiederholen"
												ref={this.confirmPasswordRef}
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
										Registrieren
									</Button>
									<Form.Text className="mt-3">
										Schon registriert?{' '}
										<Link to="/auth/login">Hier anmelden</Link>
									</Form.Text>
								</Col>
							</Row>
						</Form>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Signup;
