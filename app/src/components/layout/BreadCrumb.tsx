import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container, Breadcrumb } from 'react-bootstrap';
import * as Icons from 'react-feather';
import { history } from '../../history';

import '../../styles/breadcrumb.scss';

class BreadCrumb extends Component {
	render() {
		return (
			<Breadcrumb>
				<Container className="breadcrumb mb-0 pt-0 pb-0">
					<BrowserRouter>
						<Route
							path="/"
							component={() => (
								<Breadcrumb.Item
									onClick={(e: React.MouseEvent) => {
										history.push('/');
									}}
								>
									<Icons.Home />
								</Breadcrumb.Item>
							)}
						/>
						<Route
							path="/about-us"
							component={() => (
								<Breadcrumb.Item
									href="/about-us"
									onClick={(e: React.MouseEvent) => {
										history.push('/');
									}}
								>
									About Us
								</Breadcrumb.Item>
							)}
						/>
						<Route
							path="/about-the-project"
							component={() => (
								<Breadcrumb.Item
									onClick={(e: React.MouseEvent) => {
										history.push('/');
									}}
								>
									About the project
								</Breadcrumb.Item>
							)}
						/>
						<Route
							path="/faq"
							component={() => (
								<Breadcrumb.Item
									onClick={(e: React.MouseEvent) => {
										history.push('/');
									}}
								>
									FAQ
								</Breadcrumb.Item>
							)}
						/>
					</BrowserRouter>
				</Container>
			</Breadcrumb>
		);
	}
}

export default BreadCrumb;
