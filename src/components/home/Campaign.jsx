import React, { Component, Fragment } from "react";
import { Container } from "react-bootstrap";
import classes from "./Campaign.module.css";

class Campaign extends Component {
  state = {
    isCloseBtnClick: true,
  };

  closeBtnHandler = () => {
    this.setState({ isCloseBtnClick: false });
  };

  render() {
    return (
      <Fragment>
        
      </Fragment>
    );
  }
}

export default Campaign;
