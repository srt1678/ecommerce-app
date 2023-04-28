import "./WishList.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const WishList = () => {
    const wishList = useSelector((state) => state.cart.wishList);

    return (
        <>
            {wishList.length === 0 ? (
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} className='my-5'>
                    <h4>YOUR WISH LIST IS CURRENTLY EMPTY</h4>
                </div>
            ) : (
                <Container className="my-5">
                    <Row className="featured_container align-items-center mb-4">
                    <Col md={6} sm={12} className="featured_col">
                        <h3>YOUR WISH LIST</h3>
                    </Col>
                    <Col md={6} sm={12} className="featured_col">
                        <p className="featured_para">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </p>
                    </Col>
                </Row>
                    <Row>
                        {wishList.map((item) => {
                            return (
                                <Col
                                    sm
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                    key={item.id}
                                >
                                    <Link
                                        className="card_link"
                                        to={`/product/${item.id}`}
                                        style={{
                                            textDecoration: "inherit",
                                            color: "inherit",
                                        }}
                                    >
                                        <div className="card">
                                            <div className="card_image">
                                                {item.isNew && (
                                                    <span>New Season</span>
                                                )}
                                                {item.oldPrice && (
                                                    <span>On Sales</span>
                                                )}
                                                <img
                                                    src={item.image1}
                                                    alt=""
                                                    className="card_mainImg"
                                                />
                                                <img
                                                    src={item.image2}
                                                    alt=""
                                                    className="card_secondImg"
                                                />
                                            </div>
                                            <h3>{item.title}</h3>
                                            <div className="card_prices mb-4">
                                                {item.oldPrice ? (
                                                    <h4 className="oldPrice">
                                                        ${item.oldPrice}
                                                    </h4>
                                                ) : (
                                                    ""
                                                )}
                                                <h4 className="newPrice">
                                                    ${item.newPrice}
                                                </h4>
                                            </div>
                                        </div>
                                    </Link>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            )}
        </>
    );
};
