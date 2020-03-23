import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container, Breadcrumb } from 'react-bootstrap';
import * as Icons from 'react-feather';
import BreadcrumbItem from './BreadcrumbItem';
import { history } from '../../../history';

import '../../../styles/breadcrumb.scss';

class BreadCrumb extends Component {
	render() {
		return (
			<Breadcrumb>
				<Container className="breadcrumb mb-0 pt-0 pb-0">
					<BrowserRouter>
						<BreadcrumbItem path="/">
							<Icons.Home />
						</BreadcrumbItem>
						<BreadcrumbItem path="/about-us">About Us</BreadcrumbItem>
						<BreadcrumbItem path="/about-the-project">About The Project</BreadcrumbItem>
						<BreadcrumbItem path="/faq">FAQ</BreadcrumbItem>
						<BreadcrumbItem path="/legal/imprint">Impressum</BreadcrumbItem>
					</BrowserRouter>
				</Container>
			</Breadcrumb>
		);
	}
}

export default BreadCrumb;
