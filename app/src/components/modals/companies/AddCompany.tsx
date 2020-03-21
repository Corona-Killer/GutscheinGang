import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

interface Props {}
interface State {
	modalOpen: boolean;
}

class AddCompany extends Component<Props, State> {
	//SECTION React lifecycle

	constructor(props: Props) {
		super(props);
		this.state = {
			modalOpen: false
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

	render() {
		const { modalOpen } = this.state;

		return (
			<React.Fragment>
				<Button variant="outline-success" onClick={this.openModal}>
					Add Company
				</Button>

				<Modal show={modalOpen} centered onHide={this.closeModal}>
					<Modal.Header className="bg-dark text-light"></Modal.Header>
				</Modal>
			</React.Fragment>
		);
	}
}

export default AddCompany;
