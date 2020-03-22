import React, { Component, RefObject, createRef } from 'react';
import { Modal, Button, Form, Alert, Row, Col } from 'react-bootstrap';
import AutoCompleteInput from '../../util/AutoCompleteInput/AutoCompleteInput';
import { StoreState } from '../../../store';
import { SectorsState } from '../../../store/models/sectors/reducer';
import { connect } from 'react-redux';
import { Company } from '../../../store/models/companies';
import { createCompany } from '../../../store/models/companies/actions';
import { CompaniesState } from '../../../store/models/companies/reducer';
import ButtonSpinner from '../../common/ButtonSpinner';

const MAX_DESCRIPTION_LENGTH = 2000;

const mapStateToProps = (state: StoreState) => ({
	companies: state.companies,
	sectors: state.sectors
});
const mapDispatchToProps = {
	createCompany
};

interface Props {
	companies: CompaniesState;
	sectors: SectorsState;
	createCompany: (company: Company) => void;
}
interface State {
	modalOpen: boolean;
	descriptionLength: number;
}

const initState: State = {
	modalOpen: true,
	descriptionLength: 0
};

class AddCompany extends Component<Props, State> {
	nameRef: RefObject<any>;
	descriptionRef: RefObject<any>;
	sectorRef: RefObject<any>;
	postalCodeRef: RefObject<any>;
	cityRef: RefObject<any>;
	streetRef: RefObject<any>;
	paypalAddressRef: RefObject<any>;

	//SECTION React lifecycle

	constructor(props: Props) {
		super(props);
		this.state = initState;

		// Bind refs
		// TODO
		this.nameRef = createRef();
		this.descriptionRef = createRef();
		this.sectorRef = createRef();
		this.postalCodeRef = createRef();
		this.cityRef = createRef();
		this.streetRef = createRef();
		this.paypalAddressRef = createRef();
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

	onChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
		const descriptionLength = this.descriptionRef.current?.value.length;
		this.setState({ descriptionLength });
	};

	handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const newCompany: Company = {
			name: this.nameRef.current?.value,
			sector: {
				name: this.sectorRef.current?.value
			},
			postalCode: this.postalCodeRef.current?.value,
			city: this.cityRef.current?.value,
			street: this.streetRef.current?.value,
			paypalAddress: this.paypalAddressRef.current?.value,
			description: this.descriptionRef.current?.value
		};

		this.props.createCompany(newCompany);
	};

	render() {
		const { modalOpen } = this.state;
		const sectors = this.props.sectors.data;
		const { errors, loading } = this.props.companies;

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
							{errors.add?.general && (
								<Alert variant="danger">{errors.add.general.message}</Alert>
							)}

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
											required
											ref={this.nameRef}
											readOnly={loading.add}
											isInvalid={
												errors.add?.name && errors.add?.name.message !== ''
											}
											isValid={errors.add! && !errors.add?.name}
										/>
										{errors.add?.name && (
											<Form.Text className="text-danger">
												{errors.add?.name.message}
											</Form.Text>
										)}
									</Form.Group>
								</Col>

								{/* Description */}
								<Col xs={12}>
									<Form.Group controlId="description">
										<Form.Label>
											<b>
												Beschreibung<span className="text-danger">*</span>
											</b>
										</Form.Label>
										<Form.Control
											as="textarea"
											rows={5}
											min={5}
											max={MAX_DESCRIPTION_LENGTH}
											placeholder="Beschreibe dein Geschäft..."
											required
											ref={this.descriptionRef}
											readOnly={loading.add}
											isInvalid={
												errors.add?.description &&
												errors.add?.description.message !== ''
											}
											isValid={errors.add! && !errors.add?.description}
											onChange={this.onChange}
										/>
										<span
											className={`small d-block ${
												this.state.descriptionLength <=
												MAX_DESCRIPTION_LENGTH
													? 'text-secondary'
													: 'text-danger'
											}`}
											style={{ textAlign: 'right' }}
										>
											{this.state.descriptionLength} /{' '}
											{MAX_DESCRIPTION_LENGTH}
										</span>
										{errors.add?.description && (
											<Form.Text className="text-danger">
												{errors.add?.description.message}
											</Form.Text>
										)}
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
											suggestions={sectors.map((sector) => sector.name)}
											placeholder="z.B. Lebensmittelgeschäft"
											required
											ref={this.sectorRef}
											readOnly={loading.add}
											isInvalid={
												errors.add?.sector &&
												errors.add?.sector.message !== ''
											}
											isValid={errors.add! && !errors.add?.sector}
										/>
										{errors.add?.sector && (
											<Form.Text className="text-danger">
												{errors.add?.sector.message}
											</Form.Text>
										)}
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
											required
											ref={this.postalCodeRef}
											readOnly={loading.add}
											isInvalid={
												errors.add?.postalCode &&
												errors.add?.postalCode.message !== ''
											}
											isValid={errors.add! && !errors.add?.postalCode}
										/>
										{errors.add?.postalCode && (
											<Form.Text className="text-danger">
												{errors.add?.postalCode.message}
											</Form.Text>
										)}
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
											required
											ref={this.cityRef}
											readOnly={loading.add}
											isInvalid={
												errors.add?.city && errors.add?.city.message !== ''
											}
											isValid={errors.add! && !errors.add?.city}
										/>
										{errors.add?.city && (
											<Form.Text className="text-danger">
												{errors.add?.city.message}
											</Form.Text>
										)}
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
											required
											ref={this.streetRef}
											readOnly={loading.add}
											isInvalid={
												errors.add?.street &&
												errors.add?.street.message !== ''
											}
											isValid={errors.add! && !errors.add?.street}
										/>
										{errors.add?.street && (
											<Form.Text className="text-danger">
												{errors.add?.street.message}
											</Form.Text>
										)}
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
											type="email"
											max={255}
											placeholder="z.B. max.mustermann@domain.com"
											required
											ref={this.paypalAddressRef}
											readOnly={loading.add}
											isInvalid={
												errors.add?.paypalAddress &&
												errors.add?.paypalAddress.message !== ''
											}
											isValid={errors.add! && !errors.add?.paypalAddress}
										/>
										{errors.add?.paypalAddress && (
											<Form.Text className="text-danger">
												{errors.add?.paypalAddress.message}
											</Form.Text>
										)}
									</Form.Group>
								</Col>
							</Row>
						</Modal.Body>
						<Modal.Footer>
							<Button
								variant="outline-danger"
								type="reset"
								onClick={this.closeModal}
								disabled={loading.add}
							>
								Abbrechen
							</Button>
							<Button variant="dark" type="submit" disabled={loading.add}>
								{loading.add && <ButtonSpinner />}
								Speichern
							</Button>
						</Modal.Footer>
					</Form>
				</Modal>
			</React.Fragment>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCompany);
