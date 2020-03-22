import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import BreadCrumb from '../layout/BreadCrumb';
import '../../styles/about.scss';
import { url } from 'inspector';
import aboutUs from '../../resources/images/about-us.png'

class AboutUs extends Component {
	render() {
		return (
			<React.Fragment>
				<BreadCrumb />
				<Container className="mt-3 mb-3">
					<img src={aboutUs} className="about--image"></img>
					<span className="about--description-heading">Über Uns</span>
					<p className="about--description-text">
					Wir sind ein Team aus 8 Entwickler*innen, das sich über den 
					<a target="_blank" href="https://wirvsvirushackathon.org/"><b> #WirVsVirus</b>-Hackathon </a> 
					der Bundesregierung kennengelernt haben. Uns vereint das gemeinsame Ziel, dem 
					lokalen Einzelhandel sowie lokalen Unternehmer*innen zu helfen.
					</p>
					<p className="about--description-text">
						Viel Spaß mit der Website wünschen Euch 
						Felix, Ferdinand, Henri, Jens, Julia, Julian, Stefan und Tobias
					</p>
				</Container>
			</React.Fragment>
		);
	}
}

export default AboutUs;
