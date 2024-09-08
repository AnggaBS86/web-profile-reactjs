import React, { Component, Fragment } from "react";
import classes from "./Contact.module.css";
import {
  Container,
  Breadcrumb,
  Row,
  Col,
  Card,
  Form,
  Button,
} from "react-bootstrap";
import Validation from "../../validation/Validation";
import axios from "axios";
import AppURL from "../../api/AppURL";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Pricing extends Component {
  constructor() {
    super();
    
  }

  nameOnChange = (event) => {
    let enteredName = event.target.value;
    // alert(name);
    this.setState({ name: enteredName });
  };
  emailOnChange = (event) => {
    let enteredEmail = event.target.value;
    // alert(email);
    this.setState({ email: enteredEmail });
  };
  messageOnChange = (event) => {
    let enteredMessage = event.target.value;
    // alert(message);
    this.setState({ message: enteredMessage });
  };

  render() {
    return (
      <Fragment>
        {/* Start Breadcrumb */}
        <Container>
          <Breadcrumb className={`${classes["custom-breadcrumb"]}`}>
            <Breadcrumb.Item
              className={`${classes["breadcrumb-item"]}`}
              href="/"
            >
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className={`${classes["breadcrumb-item"]} active`}
              active
            >
              Pricing
            </Breadcrumb.Item>
          </Breadcrumb>
        </Container>
        {/* End Breadcrumb */}

        {/* Start Contact Us */}
        <div className="bg-white py-5">
          <Container>
            <h1 className={`${classes["contact-title"]}`}>Pricing</h1>
            <Row>
              <Col className="mb-2" xl={4} lg={6} md={12} sm={12}>
                <Card className={`${classes["custom-card"]}`}>
                  <Card.Body>
                    <span className={`${classes["card-title"]}`}>
                      <i
                        className={`${classes["custom-icon"]} far fa-comment-alt`}
                      ></i>
                      BASIC Plan
                    </span>
                    <p className={`${classes["card-body-text"]} mt-1`}>
                    a. Mencatat barang masuk <br/>
                    b. Mencatat barang keluar <br/>
                    c. Mencatat hasil keuntungan <br/>
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="mb-2" xl={4} lg={6} md={12} sm={12}>
                <Card className={`${classes["custom-card"]}`}>
                  <Card.Body>
                    <span className={`${classes["card-title"]}`}>
                      <i
                        className={`${classes["custom-icon-phone"]} fas fa-phone`}
                      ></i>
                      BUSINNES Plan
                    </span>
                    <p className={`${classes["card-body-text"]} mt-1`}>
                    a. Mencatat barang masuk dan keluar <br/>
                    b. Mencatat Keuntungan <br/>
                    c. Dapat menganalisa hasil penjualan dengan CHART <br/>
                    d. Support 7x24 Jam <br/>
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="mb-2" xl={4} lg={6} md={12} sm={12}>
                <Card className={`${classes["custom-card"]}`}>
                  <Card.Body>
                    <span className={`${classes["card-title"]}`}>
                      <i
                        className={`${classes["custom-icon-phone"]} fas fa-phone`}
                      ></i>
                      ENTERPRENEUR Plan
                    </span>
                    <p className={`${classes["card-body-text"]} mt-1`}>
                    a. Mencatat barang masuk dan keluar <br/>
                    b. Mencatat Keuntungan <br/>
                    c. Dapat menganalisa hasil penjualan dengan CHART <br/>
                    d. Support 7x24 Jam <br/>
                    e. Export data ke Excel <br/>
                    f. AI Prediksi penghasilan <br/>
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <br />
          </Container>
        </div>
        {/* End Contact Us */}

        {/* Start React Toastify */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover={false}
          closeButton={false}
        />
        {/* End React Toastify */}
      </Fragment>
    );
  }
}

export default Pricing;
