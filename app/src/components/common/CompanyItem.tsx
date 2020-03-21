import React from 'react';
import { Sector } from '../../store/models/sectors';
import { Card, Badge, Button } from 'react-bootstrap';
import { Company } from '../../store/models/companies';
import logoEmpty from '../../resources/images/empty-company-logo-2.jpg';
import { url } from 'inspector';

interface Props {
	company: Company;
}

const CompanyItem: React.FC<Props> = (props: Props) => {
	const { logoUrl, sector, name, description, street, postalCode, city } = props.company;

	return (
		<Card className="company--card shadow">
			<div
				className="company--card-image"
				style={{ backgroundImage: `url(${logoUrl ? logoUrl : logoEmpty})` }}
			/>
			{/* <img src={logoUrl ? logoUrl : logoEmpty} alt="" className="company--card-image" /> */}
			<div className="company--card-text">
				<h1>{name}</h1>
				{sector && (
					<Badge pill variant="secondary">
						{sector.name}
					</Badge>
				)}
				<h5 className="mt-36">{description}</h5>
				{postalCode && city && street && (
					<small>
						{postalCode} {city} - {street}
					</small>
				)}
			</div>
			<div className="company--card-buy-button">
				<Button variant="primary">Gutschein kaufen</Button>
			</div>
		</Card>
	);
};

export default CompanyItem;
