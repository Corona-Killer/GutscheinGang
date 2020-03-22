import React, { Component } from 'react';
import { Jumbotron, Container, Form, InputGroup } from 'react-bootstrap';
import BreadCrumb from '../layout/BreadCrumb';
import * as Icons from 'react-feather';
import CompanyItem from '../common/CompanyItem';
import { StoreState } from '../../store';
import { CompaniesState } from '../../store/models/companies/reducer';
import { connect } from 'react-redux';

import '../../styles/jumbotron.scss';
import AddCompany from '../modals/companies/AddCompany';

interface Props {
	companies: CompaniesState;
}

const mapStateToProps = (state: StoreState) => ({
	companies: state.companies
});

class Home extends Component<Props> {
	render() {
		const { companies } = this.props;

		return (
			<React.Fragment>
				<Jumbotron className="jumbotron-background mb-0">
					<Container className="mt-5">
						<h1 className="text-white text-center">
							Suche nach einem Geschäft in Deiner Stadt!
						</h1>
						<div className="mt-5">
							{/* <Form.Group controlId="123"> */}
							<InputGroup>
								<Form.Control type="text" placeholder="lorem ipsum" />
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
