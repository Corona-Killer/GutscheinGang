import React, { Component } from 'react';
import { Modal, Button, Form, Alert, Row, Col } from 'react-bootstrap';
import AutoCompleteInput from '../../util/AutoCompleteInput/AutoCompleteInput';
import { StoreState } from '../../../store';
import { SectorsState } from '../../../store/models/sectors/reducer';
import { connect } from 'react-redux';

const mapStateToProps = (state: StoreState) => ({
	sectors: state.sectors
});

interface Props {
	sectors: SectorsState;
}
interface State {
	modalOpen: boolean;
}

class AddCompany extends Component<Props, State> {
	//SECTION React lifecycle

	constructor(props: Props) {
		super(props);
		this.state = {
			modalOpen: true
		};

		console.log();

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
										<Form.Control
											type="text"
											max={255}
											placeholder="z.B. Rewe"
										/>
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
										{/* <Form.Control type="text" max={255} /> */}
										<AutoCompleteInput
											max={255}
											suggestions={this.props.sectors.data.map(
												(sector) => sector.name
											)}
											placeholder="z.B. Lebensmittelgeschäft"
										/>
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
										<Form.Control
											type="number"
											min={10000}
											max={99999}
											placeholder="z.B. 12345"
										/>
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
										<Form.Control
											type="text"
											max={255}
											placeholder="z.B. Musterstadt"
										/>
									</Form.Group>
								</Col>
								{/* Street */}
								<Col>
									<Form.Group controlId="street">
										<Form.Label>
											<b>
												Straße. Nr.<span className="text-danger">*</span>
											</b>
										</Form.Label>
										<Form.Control
											type="text"
											max={255}
											placeholder="z.B. Musterstraße 123"
										/>
									</Form.Group>
								</Col>
							</Row>
							<Row className="mt-2">
								{/* Paypal address */}
								<Col>
									<Form.Group controlId="paypalAddress">
										<Form.Label>
											<b>
												PayPal Email-Adresse
												<span className="text-danger">*</span>
											</b>
										</Form.Label>
										<Form.Control
											type="text"
											max={255}
											placeholder="z.B. max.mustermann@domain.com"
										/>
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

export default connect(mapStateToProps)(AddCompany);
