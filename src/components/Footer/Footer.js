import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import footerImg from '../img/paymentLogo.png'
import './Footer.css'
import { useNavigate } from "react-router-dom";

export const Footer = () => {
    const navigate = useNavigate();

    const handleNav = (categoryNum) => {
        navigate(`/category/${categoryNum}`)
    }

    return (
        <div className='footer_div_container'>
            <Container className="footer_container">
                <Row>
                    <Col xxl={3} sm={6} className='mb-2'>
                        <div>
                            <span className="categories_span_title mb-1">
                                Categories
                            </span>
                            <span className="categories_span mb-1" onClick={() => handleNav(1)}>Women</span>
                            <span className="categories_span mb-1" onClick={() => handleNav(2)}>Men</span>
                            <span className="categories_span mb-1" onClick={() => handleNav(3)}>
                                Shoes
                            </span>
                            <span className="categories_span mb-1" onClick={() => handleNav(4)}>
                                Accessories
                            </span>
                        </div>
                    </Col>
                    <Col xxl={3} sm={6} className='mb-2'>
                        <div>
                            <span className="categories_span_title mb-1">
                                Links
                            </span>
                            <span className="categories_span mb-1">FAQ</span>
                            <span className="categories_span mb-1">Pages</span>
                            <span className="categories_span mb-1">
                                Stories
                            </span>
                            <span className="categories_span mb-1">
                                Cookies
                            </span>
                        </div>
                    </Col>
                    <Col xxl={3} className='mb-2'>
                        <div>
                            <span className="categories_span_title mb-1">
                                About
                            </span>
                            <p className="about_para">
                                Lorem Ipsum has been the industry's standard
                                dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it
                                to make a type specimen book.
                            </p>
                        </div>
                    </Col>
                    <Col xxl={3} className='mb-2'>
                        <div>
                            <span className="categories_span_title mb-1">
                                Contact
                            </span>
                            <p className="about_para">
                                Lorem Ipsum has been the industry's standard
                                dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it
                                to make a type specimen book.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row style={{alignItems: 'center'}}>
                    <Col className='categories_span'>2023 FAKESHOP | Developed by Steve C.</Col>
                    <Col>
                        <img className='footer_payment_logos' src={footerImg}></img>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
