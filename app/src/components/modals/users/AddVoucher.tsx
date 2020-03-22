import React, { Component } from "react";
import {
  Modal,
  Button,
  Form,
  Alert,
  Row,
  Col,
  InputGroup
} from "react-bootstrap";
import AutoCompleteInput from "../../util/AutoCompleteInput/AutoCompleteInput";
import { StoreState } from "../../../store";
import { SectorsState } from "../../../store/models/sectors/reducer";
import { connect } from "react-redux";
var PayPalButton: any = require('react-paypal-button-v2');

const mapStateToProps = (state: StoreState) => ({
  sectors: state.sectors
});

interface Props {
  sectors: SectorsState;
}
interface State {
  modalOpen: boolean;
}

class AddVoucher extends Component<Props, State> {
  //SECTION React lifecycle

  amountInEuro: number = 10;

  constructor(props: Props) {
    super(props);
    this.state = {
      modalOpen: false
    };

    console.log();

    // Bind refs
    // TODO
  }

  //!SECTION

  //SECTION Modal functions

  openModal = () => {
    this.setState({ modalOpen: true });
  };
  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  //!SECTION

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { 
	  
	e.preventDefault();
	console.log(e);};

  render() {
    const { modalOpen } = this.state;

    return (
      <React.Fragment>
        <Button
          variant="primary"
          onClick={this.openModal}
          className="d-block ml-auto mb-3"
        >
          Gutschein kaufen
        </Button>

        <Modal show={modalOpen} centered onHide={this.closeModal} size="lg">
          <Modal.Header className="bg-dark text-light">
            <Modal.Title>Einen Gutschein kaufen</Modal.Title>
          </Modal.Header>
          <Form autoComplete="off" onSubmit={this.handleSubmit}>
            <Modal.Body>
              {/*<Alert variant="danger">ERROR: Some error message...</Alert>*/}

              <Row>
                {/* Name */}
                <Col md={6} xs={12}>
                  <Form.Group controlId="firstName">
                    <Form.Label>
                      <b>
                        Vorname<span className="text-danger">*</span>
                      </b>
                    </Form.Label>
                    <Form.Control type="text" placeholder="z.B. Max" />
                  </Form.Group>
                </Col>
                {/* City */}
                <Col md={6} xs={12}>
                  <Form.Group controlId="lastName">
                    <Form.Label>
                      <b>
                        Nachname<span className="text-danger">*</span>
                      </b>
                    </Form.Label>
                    <Form.Control type="text" placeholder="z.B. Mustermann" />
                  </Form.Group>
                </Col>

                {/* Sector */}
                <Col xs={12}>
                  <Form.Group controlId="sector">
                    <Form.Label>
                      <b>
                        Email<span className="text-danger">*</span>
                      </b>
                    </Form.Label>
                    {/* <Form.Control type="text" max={255} /> */}
                    <Form.Control
                      type="email"
                      placeholder="z.B. max.mustermann@example.org"
                    />
                  </Form.Group>
                </Col>

                <Col xs={12} className="mt-36">
                  <Form.Group controlId="sector">
                    <Form.Label>
                      <b>
                        Betrag<span className="text-danger">*</span>
                      </b>
                    </Form.Label>
                    {/* <Form.Control type="text" max={255} /> */}
                    <InputGroup className="mb-3">
                      <Form.Control
                        type="number"
                        min={0}
                        max={50}
						step={1}
							
                        placeholder="z.B. 10 Euro"
                      />
                      <InputGroup.Append>
                        <InputGroup.Text id="euroAddon">€</InputGroup.Text>
                      </InputGroup.Append>
                    </InputGroup>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="justify-content-md-center">
                <Col xs={8} className="mt-36">
                  <PayPalButton.PayPalButton
                    amount={this.amountInEuro}
                    // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                    onSuccess={(details: any, data: any) => {
                      alert(
                        "Transaction completed by " +
                          details.payer.name.given_name
                      );

                      // OPTIONAL: Call your server to save the transaction
                      return fetch("/paypal-transaction-complete", {
                        method: "post",
                        body: JSON.stringify({
                          orderID: data.orderID
                        })
                      });
                    }}
                  />
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="outline-danger"
                type="reset"
                onClick={this.closeModal}
              >
                Abbrechen
              </Button>
			  <Button
                variant="success"
                type="submit"
              >
                Bezahlen
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(AddVoucher);
