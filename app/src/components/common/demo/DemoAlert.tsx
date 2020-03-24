import React from 'react';
import { Alert } from 'react-bootstrap';

const DemoAlert: React.FC = () => {
	// Only render modal if not in development
	const { NODE_ENV: env } = process.env;
	if (env === 'development') {
		return null;
	}

	return (
		<Alert variant="danger">
			<Alert.Heading>Demo</Alert.Heading>
			CoronaCoupon befindet sich noch im Aufbau. Die Inhalte sind nur zu Demonstrations- und
			Testzwecken. Bitte nicht versuchen, Gutscheine zu kaufen / Geschäfte zu registrieren.
			Danke!
		</Alert>
	);
};

export default DemoAlert;
