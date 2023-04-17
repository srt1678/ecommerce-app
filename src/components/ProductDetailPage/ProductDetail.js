import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Heart, Grid } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "./ProductDetail.css";

export const ProductDetail = () => {
    const [selectImage, setSelectImage] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [selectSize, setSelectSize] = useState("L");
    const image = [
        "https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    ];
    const standardSizes = ["XS", "S", "M", "L", "XL", "XXL"];

    return (
        <>
            <Container className="mt-3 mb-5">
                <Row>
                    <Col md={2} sm={4}>
                        <div className="productImageList">
                            <img
                                className="listImage"
                                src={image[0]}
                                alt=""
                                onClick={() => setSelectImage(0)}
                            />
                            <img
                                className="listImage"
                                src={image[1]}
                                alt=""
                                onClick={() => setSelectImage(1)}
                            />
                        </div>
                    </Col>
                    <Col md={5} sm={8} className="mb-5">
                        <div className="productBigImage">
                            <img
                                className="bigImage"
                                src={image[selectImage]}
                                alt=""
                            />
                        </div>
                    </Col>
                    <Col md={5} className="">
                        <div>
                            <h2 className="mb-3">Title</h2>
                            <h4
                                className="mb-3"
                                style={{ color: "rgb(13,110,253)" }}
                            >
                                Price $
                            </h4>
                            <hr />
                            <h5 className="mb-4">Color: Light Brown</h5>
                            <div className="quantityLine mb-4">
                                <button
                                    className="quantityButton"
                                    style={
                                        quantity === 0
                                            ? {
                                                  pointerEvents: "none",
                                                  backgroundColor:
                                                      "rgb(238, 238, 238)",
                                              }
                                            : { pointerEvent: "auto" }
                                    }
                                    onClick={() => setQuantity(quantity - 1)}
                                >
                                    -
                                </button>
                                <h4 className="quantityNum">{quantity}</h4>
                                <button
                                    className="quantityButton"
                                    onClick={() => setQuantity(quantity + 1)}
                                >
                                    +
                                </button>
                            </div>
                            <div className="mb-4">
                                <button className="addToCartButton">
                                    <h5 className="addToCartButtonText">
                                        ADD TO CART
                                    </h5>
                                </button>
                            </div>
                            <div className="optionButtonList mt-3 mb-4">
                                <Link
                                    className=""
                                    to={""}
                                    style={{
                                        textDecoration: "inherit",
                                    }}
                                >
                                    <div className="favButton me-3">
                                        <Heart className="me-2" /> ADD TO WISH
                                        LIST
                                    </div>
                                </Link>
                                <Link
                                    className=""
                                    to={""}
                                    style={{
                                        textDecoration: "inherit",
                                    }}
                                >
                                    <div className="compareButton">
                                        <Grid className="me-1" /> ADD TO COMPARE
                                    </div>
                                </Link>
                            </div>
                            <hr />
                            <div className="selectSizesContainer">
                                {standardSizes.map((singleSize) => {
                                    return (
                                        <button
                                            className="sizeButton"
                                            key={singleSize}
                                            onClick={() =>
                                                setSelectSize(singleSize)
                                            }
                                            style={
                                                selectSize === singleSize
                                                    ? {
                                                          backgroundColor:
                                                              "black",
                                                          color: "white",
                                                          outline:
                                                              "solid 1.5px white",
                                                      }
                                                    : {
                                                          backgroundColor:
                                                              "rgb(218, 217, 217)",
                                                          border: "solid 1.5px black",
                                                          outline:
                                                              "solid 1.5px black",
                                                      }
                                            }
                                        >
                                            {singleSize}
                                        </button>
                                    );
                                })}
                            </div>
                            <hr />
                            <div className="moreDetail">
                                <p>
                                    New mid rise denim shorts in a long and
                                    loose fit through the thigh, featuring a
                                    light brown wash, functional pockets, belt
                                    loops, frayed hem and zipper fly.
                                </p>
                                <hr />
                                <span>
                                    Body:69% Cotton, 31% Lyocell / Pocket
                                    Bag:70% Polyester, 30% Cotton
                                </span>
                                <hr />
                                <span>FAQ</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};
