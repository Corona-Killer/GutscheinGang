import React, { Component, RefObject, createRef } from 'react';
import { Form, Button, InputGroup, Row, Col, Alert } from 'react-bootstrap';
import * as Icons from 'react-feather';

import logo from '../../../resources/images/coupons-from-local-businesses.png';

import '../../../styles/login.scss';
import { history } from '../../../history';
import { StoreState } from '../../../store';
import { LoginUserProps, loginUser } from '../../../store/models/auth/actions';
import { connect } from 'react-redux';
import { AuthState } from '../../../store/models/auth/reducer';
import ButtonSpinner from '../../common/ButtonSpinner';

interface Props {
	auth: AuthState;
	loginUser: (props: LoginUserProps) => void;
}

const mapStateToProps = (state: StoreState) => ({
	auth: state.auth
});
const mapDispatchToProps = {
	loginUser
};

class Login extends Component<Props> {
	emailRef: RefObject<any>;
	passwordRef: RefObject<any>;

	constructor(props: Props) {
		super(props);

		// Bind refs
		this.emailRef = createRef();
		this.passwordRef = createRef();
	}

	handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const email = (this.emailRef.current as HTMLInputElement).value;
		const password = (this.passwordRef.current as HTMLInputElement).value;

		this.props.loginUser({ email, password });
	};

	render() {
		const { loading, errors } = this.props.auth;
		return (
			<React.Fragment>
				<div className="login--bg">
					<div className="login--form">
						<img src={logo} alt="Logo" />
						<Form autoComplete="on" className="mt-3" onSubmit={this.handleSubmit}>
							{errors.login?.general && (
								<Row>
									<Col>
										<Alert variant="danger">
											{errors.login.general.message}
										</Alert>
									</Col>
								</Row>
							)}
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
												readOnly={loading.login}
												isInvalid={
													errors.login?.email &&
													errors.login.email.message !== ''
												}
												isValid={errors.login! && !errors.login?.email}
											/>
										</InputGroup>
										{errors.login?.email && (
											<Form.Text className="text-danger text-left">
												{errors.login.email.message}
											</Form.Text>
										)}
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
												readOnly={loading.login}
												isInvalid={
													errors.login?.password &&
													errors.login.password.message !== ''
												}
												isValid={errors.login! && !errors.login?.password}
											/>
										</InputGroup>
										{errors.login?.password && (
											<Form.Text className="text-danger text-left">
												{errors.login.password.message}
											</Form.Text>
										)}
									</Form.Group>
								</Col>
							</Row>

							{/* Buttons */}
							<Row>
								<Col>
									<Button
										type="submit"
										block
										className="mt-3"
										disabled={loading.login}
									>
										{loading.login && <ButtonSpinner />}
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
