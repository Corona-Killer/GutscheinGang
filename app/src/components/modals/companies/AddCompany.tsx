import React, { Component } from 'react';
import { Modal, Button, Form, Alert, Row, Col } from 'react-bootstrap';

interface Props {}
interface State {
	modalOpen: boolean;
}

/**
 * FIELDS
 * name
 * sector
 * postal code - city
 * street
 * paypal address (email)
 */

class AddCompany extends Component<Props, State> {
	//SECTION React lifecycle

	constructor(props: Props) {
		super(props);
		this.state = {
			modalOpen: true
		};

		// Bind refs
		// TODO
	}

	//!SECTION

	//SECTION Modal functions

	openModal = () => {
		this.setState({ modalOpen: true });
	};
	closeModal = () => {
		this.setState({ modalOpen: false });
	};

	//!SECTION

	handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {};

	render() {
		const { modalOpen } = this.state;

		return (
			<React.Fragment>
				<Button
					variant="outline-success"
					onClick={this.openModal}
					className="d-block ml-auto mb-3"
				>
					Geschäft registrieren
				</Button>

				<Modal show={modalOpen} centered onHide={this.closeModal} size="lg">
					<Modal.Header className="bg-dark text-light">
						<Modal.Title>Geschäft registrieren</Modal.Title>
					</Modal.Header>
					<Form autoComplete="off" onSubmit={this.handleSubmit}>
						<Modal.Body>
							<Alert variant="danger">ERROR: Some error message...</Alert>

							<Row>
								{/* Name */}
								<Col xs={12}>
									<Form.Group controlId="name">
										<Form.Label>
											<b>
												Name<span className="text-danger">*</span>
											</b>
										</Form.Label>
										<Form.Control type="text" max={255} />
									</Form.Group>
								</Col>

								{/* Sector */}
								<Col xs={12}>
									<Form.Group controlId="sector">
										<Form.Label>
											<b>
												Sektor<span className="text-danger">*</span>
											</b>
										</Form.Label>
										<Form.Control type="text" max={255} />
									</Form.Group>
								</Col>
							</Row>
							<Row className="mt-2">
								{/* Postal Code */}
								<Col md={3} xs={6}>
									<Form.Group controlId="postalCode">
										<Form.Label>
											<b>
												Postleitzahl<span className="text-danger">*</span>
											</b>
										</Form.Label>
										<Form.Control type="text" max={255} />
									</Form.Group>
								</Col>
								{/* City */}
								<Col md={9} xs={6}>
									<Form.Group controlId="city">
										<Form.Label>
											<b>
												Stadt<span className="text-danger">*</span>
											</b>
										</Form.Label>
										<Form.Control type="text" max={255} />
									</Form.Group>
								</Col>
								{/* Street */}
								<Col>
									<Form.Group controlId="name">
										<Form.Label>
											<b>
												Straße. Nr.<span className="text-danger">*</span>
											</b>
										</Form.Label>
										<Form.Control type="text" max={255} />
									</Form.Group>
								</Col>
							</Row>
							<Row className="mt-2">
								{/* Paypal address */}
								<Col>
									<Form.Group controlId="name">
										<Form.Label>
											<b>
												PayPal Email-Adresse
												<span className="text-danger">*</span>
											</b>
										</Form.Label>
										<Form.Control type="text" max={255} />
									</Form.Group>
								</Col>
							</Row>
						</Modal.Body>
						<Modal.Footer>
							<Button variant="outline-danger" type="reset" onClick={this.closeModal}>
								Abbrechen
							</Button>
							<Button variant="dark" type="submit">
								Speichern
							</Button>
						</Modal.Footer>
					</Form>
				</Modal>
			</React.Fragment>
		);
	}
}

export default AddCompany;
