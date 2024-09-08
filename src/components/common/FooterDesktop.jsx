import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./FooterDesktop.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import AppURL from "../../api/AppURL";
import ReactHtmlParser from "react-html-parser";

class FooterDesktop extends Component {
  constructor() {
    super();
    this.state = {
      address: "",
      android_app_link: "",
      ios_app_link: "",
      facebook_link: "",
      twitter_link: "",
      instagram_link: "",
      copyright_text: "",
      loaderDiv: "",
      mainDiv: "d-none",
    };
  }

  componentDidMount() {
    axios
      .get(AppURL.SiteInfo)
      .then((response) => {
        let StatusCode = response.status;
        if (StatusCode === 200) {
          let JsonData = response.data[0];
          this.setState({
            address: JsonData["address"],
            android_app_link: JsonData["android_app_link"],
            ios_app_link: JsonData["ios_app_link"],
            facebook_link: JsonData["facebook_link"],
            twitter_link: JsonData["twitter_link"],
            instagram_link: JsonData["instagram_link"],
            copyright_text: JsonData["copyright_text"],
            loaderDiv: "d-none",
            mainDiv: "",
          });
        }
      })
      .catch((error) => {});
  }

  render() {
    return (
      <Fragment>
        


        
      </Fragment>
    );
  }
}

export default FooterDesktop;
