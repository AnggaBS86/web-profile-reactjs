import React, { Component, Fragment } from "react";
import FooterDesktop from "../components/common/FooterDesktop";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import Pricing from "../components/common/Pricing";

class PricingPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <NavMenuDesktop />
        <Pricing />
        <FooterDesktop />
      </Fragment>
    );
  }
}

export default PricingPage;
