import React, { Component } from 'react';
import { Jumbotron, Container, Form, InputGroup } from 'react-bootstrap';
import BreadCrumb from '../layout/BreadCrumb';
import * as Icons from 'react-feather';
import CompanyItem from '../common/CompanyItem';
import { StoreState } from '../../store';
import { CompaniesState } from '../../store/models/companies/reducer';
import { connect } from 'react-redux';

import '../../styles/jumbotron.scss';
import '../../styles/home.scss';
import AddCompany from '../modals/companies/AddCompany';
import { SectorsState } from '../../store/models/sectors/reducer';
import AutoCompleteInput from '../util/AutoCompleteInput/AutoCompleteInput';

const mapStateToProps = (state: StoreState) => ({
	companies: state.companies,
	sectors: state.sectors
});

interface Props {
	companies: CompaniesState;
	sectors: SectorsState;
}

class Home extends Component<Props> {
	// onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
	// 	if (e.key == 'Enter') {

	// 	}
	// }

	// loadCompanies = () => {

	// }

	onChangeSearch = (e: React.FormEvent<HTMLInputElement>) => {
		//
	};

	render() {
		const { companies } = this.props;
		const sectors = this.props.sectors.data;

		return (
			<React.Fragment>
				<Jumbotron className="jumbotron-background mb-0">
					<Container className="m-auto d-block">
						<h1 className="text-white text-center">
							Suche nach einem Unternehmen in Deiner Stadt!
						</h1>
						<div className="mt-5">
							{/* <Form.Group controlId="123"> */}
							<InputGroup>
								<AutoCompleteInput
									suggestions={sectors.map((sector) => sector.name)}
									type="text"
									style={{ height: '40px', fontSize: '1.2rem' }}
									placeholder="z.B. Lebensmittelgeschäft"
									onChange={this.onChangeSearch}
								/>
								{/* <Form.Control type="text" style={{ height: '40px', fontSize: '1.2rem'}} placeholder="z.B. Lebensmittelgeschäft" onKeyDown={this.onKeyDown} /> */}
								<InputGroup.Append>
									<InputGroup.Text
										style={{ backgroundColor: '#fff', borderLeft: '0px' }}
									>
										<Icons.Search />
									</InputGroup.Text>
								</InputGroup.Append>
							</InputGroup>
							{/* </Form.Group> */}
						</div>
					</Container>
				</Jumbotron>
				<BreadCrumb />
				<Container className="mt-3 mb-3">
					<span className="home--description-heading">
						{' '}
						<span className="home--description-heading-hashtag">#</span>
						SaveYourLocalBusiness{' '}
					</span>
					<p className="home--description-text">
						Kaufe Gutscheine von lokalen Unternehmen, die Du nach Wiederöffnung einlösen
						kannst. Dadurch erhält das Geschäft jetzt dringend benötigte Unterstützung
						und kann die schwere Zeit ohne Einnahmen mit Deiner Hilfe überbrücken!
					</p>
				</Container>
				<Container>
					<AddCompany />

					{companies.data.length > 0 &&
						companies.data.map((company) => {
							return <CompanyItem key={company.uuid} company={company} />;
						})}
					{/* <Company
						id="1"
						logo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Logo_Edeka.svg/1200px-Logo_Edeka.svg.png"
						city="Namborn"
						name="Edeka Schneider"
						postalCode={66640}
						sector={{ name: 'Grocery store' }}
						street="Allerburg 25"
					/> */}
				</Container>
			</React.Fragment>
		);
	}
}

export default connect(mapStateToProps)(Home);
