import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Categories.css";
import { Button } from "react-bootstrap";
import category1 from "../img/category1.jpg";
import category2 from "../img/category2.jpg";
import category3 from "../img/category3.jpg";
import category4 from "../img/category4.jpg";
import category5 from "../img/category5.jpg";
import category6 from "../img/category6.jpg";

const Categories = () => {
    return (
        <div className="categories mx-5">
            <Container fluid>
                <Row>
                    <Col sm>
                        <Row className="categories_box1 mb-2">
                            <div className="categories_img_container px-0">
                                <img
                                    className="categories_img px-0"
                                    src={category2}
                                    alt=""
                                ></img>
                                <div className="category_button_container">
                                    <Button
                                        className="category_button"
                                        variant="outline-light"
                                    >
                                        WOMEN
                                    </Button>
                                </div>
                            </div>
                        </Row>
                        <Row className="categories_box2">
                            <div className="categories_img_container px-0">
                                <img
                                    className="categories_img px-0"
                                    src={category4}
                                    alt=""
                                ></img>
                                <div className="category_button_container">
                                    <Button
                                        className="category_button"
                                        variant="outline-light"
                                    >
                                        SHOES
                                    </Button>
                                </div>
                            </div>
                        </Row>
                    </Col>
                    <Col sm={3} className="mx-2">
                        <Row className="categories_box3">
                            <div className="categories_img_container px-0">
                                <img
                                    className="categories_img px-0"
                                    src={category6}
                                    alt=""
                                ></img>
                                <div className="category_button_container">
                                    <Button
                                        className="category_button"
                                        variant="outline-light"
                                    >
                                        SALES
                                    </Button>
                                </div>
                            </div>
                        </Row>
                    </Col>
                    <Col sm={6}>
                        <Row>
                            <Col className="categories_box4 me-2 px-0">
                                <img
                                    className="categories_img"
                                    src={category3}
                                    alt=""
                                ></img>
                                <div className="category_button_container">
                                    <Button
                                        className="category_button"
                                        variant="outline-light"
                                    >
                                        MEN
                                    </Button>
                                </div>
                            </Col>
                            <Col className="categories_box5 mb-2 px-0">
                                <img
                                    className="categories_img px-0"
                                    src={category5}
                                    alt=""
                                ></img>
                                <div className="category_button_container">
                                    <Button
                                        className="category_button"
                                        variant="outline-light"
                                    >
                                        ACCESSORIES
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                        <Row className="categories_box6">
                            <img
                                className="categories_img px-0"
                                src={category1}
                                alt=""
                            ></img>
                            <div className="category_button_container">
                                <Button
                                    className="category_button"
                                    variant="outline-light"
                                >
                                    NEW SEASONS
                                </Button>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Categories;