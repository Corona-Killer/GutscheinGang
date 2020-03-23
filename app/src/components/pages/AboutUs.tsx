import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import BreadCrumb from '../layout/breadcrumb/BreadCrumb';
import '../../styles/about.scss';
import { url } from 'inspector';
import aboutUs from '../../resources/images/about-us.png';

class AboutUs extends Component {
	render() {
		return (
			<React.Fragment>
				<BreadCrumb />
				<Container className="mt-3 mb-3">
					<img src={aboutUs} className="about--image"></img>
					<p className="about--description-text">
						Wir sind ein Team aus 8 Entwickler*innen, das sich über den
						<a target="_blank" href="https://wirvsvirushackathon.org/">
							<b> #WirVsVirus</b>-Hackathon{' '}
						</a>
						der Bundesregierung kennengelernt haben. Uns vereint das gemeinsame Ziel,
						dem lokalen Einzelhandel sowie lokalen Unternehmer:innen zu helfen.
					</p>
					<p className="about--description-text">
						{' '}
						Viel Spaß mit der Website wünschen Euch{' '}
					</p>
					<div className="about--description-text about--people-grid">
						<div>
							👨‍💻
							<a
								className="about--people-link"
								href="https://github.com/redalertexpert"
							>
								Felix
							</a>
							,
						</div>
						<div>
							👨‍💻{' '}
							<a className="about--people-link" href="https://github.com/Koenneker">
								Ferdinand
							</a>
							,
						</div>
						<div>
							👨‍💻{' '}
							<a className="about--people-link" href="https://github.com/hf2000510">
								Henri
							</a>
							,
						</div>
						<div>
							👨‍💻{' '}
							<a className="about--people-link" href="https://github.com/L04L3R">
								Jens
							</a>
							,
						</div>
						<div>
							👩‍💻{' '}
							<a className="about--people-link" href="https://github.com/Juliaetta">
								Julia
							</a>
							,
						</div>
						<div>
							👨‍💻{' '}
							<a
								className="about--people-link"
								href="https://github.com/JulianLueders"
							>
								Julian
							</a>
							,
						</div>
						<div>
							👨‍💻{' '}
							<a
								className="about--people-link"
								href="https://github.com/TheWoozyDude"
							>
								Stefan
							</a>{' '}
							und{' '}
						</div>
						<div>
							👨‍💻{' '}
							<a
								className="about--people-link"
								href="https://github.com/tobiaswaelde"
							>
								Tobias
							</a>
						</div>
					</div>
				</Container>
				<Container className="about--github-repo">
					<span className="about--description-heading">Github</span>

					<a href="https://github.com/Corona-Killer/GutscheinGang">
						<img
							alt="https://github.com/Corona-Killer/GutscheinGang"
							src="https://github-link-card.s3.ap-northeast-1.amazonaws.com/Corona-Killer/GutscheinGang.png"
							width="460px"
						/>
					</a>
				</Container>
			</React.Fragment>
		);
	}
}

export default AboutUs;
