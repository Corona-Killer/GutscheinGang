import React, { Component } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import * as Icons from 'react-feather';

import logo from '../../../resources/images/coupons-from-local-businesses.png';

import '../../../styles/login.scss';

class Login extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="login--bg">
					<div className="login--form">
						<img src={logo} alt="Logo" />
						<Form autoComplete="off" className="mt-3">
							{/* Email */}
							<Form.Group controlId="email">
								<InputGroup>
									<InputGroup.Prepend>
										<InputGroup.Text>
											<Icons.Mail />
										</InputGroup.Text>
									</InputGroup.Prepend>
									<Form.Control type="email" placeholder="Email" />
								</InputGroup>
								<Form.Text className="text-danger text-left">
									ERROR MESSAGE
								</Form.Text>
							</Form.Group>

							{/* Password */}
							<Form.Group controlId="password">
								<InputGroup>
									<InputGroup.Prepend>
										<InputGroup.Text>
											<Icons.Lock />
										</InputGroup.Text>
									</InputGroup.Prepend>
									<Form.Control type="password" placeholder="Passwort" />
								</InputGroup>
								<Form.Text className="text-danger text-left">
									ERROR MESSAGE
								</Form.Text>
							</Form.Group>

							{/* Buttons */}
							<Button type="submit" block className="mt-3">
								Anmelden
							</Button>
							<Button block variant="info" className="mt-3">
								Registrieren
							</Button>
						</Form>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Login;
