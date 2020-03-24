import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const DemoModal: React.FC = () => {
	const [open, toggleModal] = useState(true);

	return (
		<Modal show={open} centered onHide={() => toggleModal(false)}>
			<Modal.Header className="bg-dark text-light">Demo</Modal.Header>
			<Modal.Body>
				CoronaCoupon befindet sich noch im Aufbau. Die Inhalte sind nur zu Demonstrations-
				und Testzwecken. Bitte nicht versuchen, Gutscheine zu kaufen / Geschäfte zu
				registrieren. Danke!
			</Modal.Body>
			<Modal.Footer>
				<Button variant="dark" className="ml-auto" onClick={() => toggleModal(false)}>
					OK
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default DemoModal;
