import React, { Component, Fragment } from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import classes from "./Categories.module.css";
import axios from "axios";
import AppURL from "../../api/AppURL";
import { Link } from "react-router-dom";
import CategoryLoading from "../PlaceHolder/CategoryLoading";

class Categories extends Component {
  constructor() {
    super();
    this.state = {
      MenuData: [],
      isLoading: "",
      mainDiv: "d-none",
    };
  }

  componentDidMount() {
    axios
      .get(AppURL.AllCategoryDetails)
      .then((response) => {
        this.setState({
          MenuData: response.data,
          isLoading: "d-none",
          mainDiv: "",
        });
      })
      .catch((error) => {});
  }

  render() {
    const CategoryList = this.state.MenuData;
    const MyView = CategoryList.map((CategoryList, i) => {
      return (
        <Col
          xl={2}
          lg={3}
          md={4}
          sm={6}
          xs={12}
          className={`${this.state.mainDiv} p-0`}
          key={i.toString()}
        >
          <Link
            className="custom-links"
            to={"/productcategory/" + CategoryList.category_name}
          >
            <Card
              className={`${classes["card-categories"]} py-3 border border-top-0 border-start-0`}
            >
              <Container>
                <Card.Img
                  className="img-fluid"
                  variant="top"
                  src={CategoryList.category_image}
                  alt="category-1"
                />
              </Container>
              <Card.Body className="text-center px-0 pt-2 pb-0">
                <span className="card-product-title">
                  {CategoryList.category_name}
                </span>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      );
    });

    return (
      <Fragment>
        
        <br />
      </Fragment>
    );
  }
}

export default Categories;
