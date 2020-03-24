import React, { Component } from 'react';
import { Modal, Button, Form, Row, Col, InputGroup } from 'react-bootstrap';
import { PayPalButton } from 'react-paypal-button-v2';
import { toast } from 'react-toastify';
// redux
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
	amountInEuro: number;
}

const initState: State = {
	modalOpen: false,
	amountInEuro: 10
};

class AddVoucher extends Component<Props, State> {
	//SECTION React lifecycle

	constructor(props: Props) {
		super(props);
		this.state = initState;

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

	handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(e);
	};

	onPaypalSuccess = (details: any, data: any) => {
		toast.success('Transaction completed by ' + details.payer.name.given_name);

		// OPTIONAL: Call your server to save the transaction
		// return fetch('/paypal-transaction-complete', {
		// 	method: 'post',
		// 	body: JSON.stringify({
		// 		orderID: data.orderID
		// 	})
		// });
	};

	render() {
		const { modalOpen, amountInEuro } = this.state;

		return (
			<React.Fragment>
				<Button variant="primary" onClick={this.openModal} className="d-block ml-auto mb-3">
					Gutschein kaufen
				</Button>

				<Modal show={modalOpen} centered onHide={this.closeModal} size="lg">
					<Modal.Header className="bg-dark text-light">
						<Modal.Title>Einen Gutschein kaufen</Modal.Title>
					</Modal.Header>
					<Form autoComplete="off" onSubmit={this.handleSubmit}>
						<Modal.Body>
							{/*<Alert variant="danger">ERROR: Some error message...</Alert>*/}

							<Row>
								{/* FirstName */}
								<Col md={6} xs={12}>
									<Form.Group controlId="firstName">
										<Form.Label>
											<b>
												Vorname<span className="text-danger">*</span>
											</b>
										</Form.Label>
										<Form.Control type="text" placeholder="z.B. Max" />
									</Form.Group>
								</Col>
								{/* LastName */}
								<Col md={6} xs={12}>
									<Form.Group controlId="lastName">
										<Form.Label>
											<b>
												Nachname<span className="text-danger">*</span>
											</b>
										</Form.Label>
										<Form.Control type="text" placeholder="z.B. Mustermann" />
									</Form.Group>
								</Col>

								{/* Email */}
								<Col xs={12}>
									<Form.Group controlId="email">
										<Form.Label>
											<b>
												Email<span className="text-danger">*</span>
											</b>
										</Form.Label>
										{/* <Form.Control type="text" max={255} /> */}
										<Form.Control
											type="email"
											placeholder="z.B. max.mustermann@example.org"
										/>
									</Form.Group>
								</Col>

								{/* Amount */}
								<Col xs={12} className="mt-36">
									<Form.Group controlId="amount">
										<Form.Label>
											<b>
												Betrag<span className="text-danger">*</span>
											</b>
										</Form.Label>
										<InputGroup className="mb-3">
											<Form.Control
												type="number"
												min={0}
												max={50}
												step={1}
												placeholder="z.B. 10 Euro"
											/>
											<InputGroup.Append>
												<InputGroup.Text id="euroAddon">€</InputGroup.Text>
											</InputGroup.Append>
										</InputGroup>
									</Form.Group>
								</Col>
							</Row>

							<Row className="justify-content-md-center">
								<Col xs={8} className="mt-36">
									<PayPalButton
										amount={amountInEuro}
										// shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
										onSuccess={this.onPaypalSuccess}
									/>
								</Col>
							</Row>
						</Modal.Body>
						<Modal.Footer>
							<Button variant="outline-danger" type="reset" onClick={this.closeModal}>
								Abbrechen
							</Button>
							<Button variant="success" type="submit">
								Bezahlen
							</Button>
						</Modal.Footer>
					</Form>
				</Modal>
			</React.Fragment>
		);
	}
}

export default connect(mapStateToProps)(AddVoucher);
