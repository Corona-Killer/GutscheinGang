import React from 'react';
import { Sector } from '../../store/models/sectors';
import { Card, Row, Col } from 'react-bootstrap';

interface Props {
	id: string;
	logo: string;
	sector: Sector;
	name: string;
	street: string;
	postalCode: number;
	city: string;
}

const Company: React.FC<Props> = (props: Props) => {
	const { id, logo, sector, name, street, postalCode, city } = props;

	return (
		<Card style={{ width: '18rem' }}>
			<Row>
				<Col xs={2}>
					<img src={logo} alt="" />
				</Col>
				<Col xs={10}>
					<h1>NAME</h1>
				</Col>
			</Row>
		</Card>
	);
};

export default Company;
