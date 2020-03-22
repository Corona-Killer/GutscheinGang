import React from 'react';
import BreadCrumb from '../../layout/BreadCrumb';
import { Container } from 'react-bootstrap';

const Imprint: React.FC = () => {
	return (
		<React.Fragment>
			<BreadCrumb />
			<Container className="mt-3 mb-3">
				<h1>Impressum</h1>
				<h2>Angaben gemäß § 5 TMG</h2>
				<p>
					&#x4A;&#x75;&#x6C;&#x69;&#x61;&#x6E;&#x20;&#x41;&#x6C;&#x65;&#x78;&#x61;&#x6E;&#x64;&#x65;&#x72;&#x20;&#x4C;&uuml;&#x64;&#x65;&#x72;&#x73;
					<br />
					&#x44;&#x6F;&#x72;&#x6E;&#x68;&#x6F;&#x6C;&#x7A;&#x68;&auml;&#x75;&#x73;&#x65;&#x72;&#x73;&#x74;&#x72;&#x61;&szlig;&#x65;&comma;&#x20;&#x31;&#x32;
					<br />
					&#x36;&#x31;&#x34;&#x34;&#x30;&#x20;&#x4F;&#x62;&#x65;&#x72;&#x75;&#x72;&#x73;&#x65;&#x6C;
				</p>
				<h2>Kontakt</h2>
				<p>
					Telefon:
					&plus;&#x34;&#x39;&#x20;&#x31;&#x35;&#x31;&#x20;&#x31;&#x31;&#x35;&#x38;&#x38;&#x37;&#x31;&#x31;
					<br />
					E-Mail:
					&#x6A;&#x75;&#x6C;&#x69;&#x61;&#x6E;&#x39;&#x39;&#x34;&#x37;&#x35;&commat;&#x67;&#x6D;&#x61;&#x69;&#x6C;&period;&#x63;&#x6F;&#x6D;
				</p>
				<h3>Haftung für Inhalte</h3>
				<p>
					Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen
					Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind
					wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
					gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen,
					die auf eine rechtswidrige Tätigkeit hinweisen.
				</p>
				<p>
					Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach
					den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung
					ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
					möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
					diese Inhalte umgehend entfernen.
				</p>
				<h3>Haftung für Links</h3>
				<p>
					Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
					keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
					Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
					Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden
					zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
					Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
				</p>
				<p>
					Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
					konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden
					von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
				</p>
				<h3>Urheberrecht</h3>
				<p>
					Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
					unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
					Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
					bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
					Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen
					Gebrauch gestattet.
				</p>
				<p>
					Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden
					die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als
					solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung
					aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
					von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
				</p>
			</Container>
		</React.Fragment>
	);
};

export default Imprint;
