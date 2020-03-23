import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import BreadCrumb from '../layout/breadcrumb/BreadCrumb';
import '../../styles/about.scss';
import aboutUs from '../../resources/images/about-us.png';

import { team } from '../../data/team';

interface TeamMemberProps {
	name: string;
	url: string;
	textAfter: string;
}
const TeamMember: React.FC<TeamMemberProps> = ({ name, url, textAfter }: TeamMemberProps) => (
	<div>
		👨‍💻{' '}
		<a
			href={`https://github.com/${url}`}
			className="about--people-link"
			rel="noopener noreferrer"
			target="_blank"
		>
			{name}
		</a>
		{textAfter}
	</div>
);

class AboutUs extends Component {
	render() {
		return (
			<React.Fragment>
				<BreadCrumb />
				<Container className="mt-3 mb-3">
					<img src={aboutUs} className="about--image" />
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
						{team.members.map((teamMember, index) => {
							let separator = ', ';
							if (team.members.length === index + 1) separator = '';
							if (team.members.length === index + 2) separator = ' und ';

							return (
								<TeamMember
									name={teamMember.firstName}
									url={teamMember.githubUsername}
									textAfter={separator}
								/>
							);
						})}
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
