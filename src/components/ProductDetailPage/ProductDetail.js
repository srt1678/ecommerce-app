import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Heart, Grid, Heartbreak } from "react-bootstrap-icons";
import { useParams, Link } from "react-router-dom";
import "./ProductDetail.css";
import { useQuery } from "@apollo/client";
import { GetProductDetail } from "../GQL/GQLProduct";
import { IsLoading, ErrorMessage } from "../IsLoading/IsLoadingError";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, addToWishList, deleteWishList } from "../../redux/reduxReducer";

export const ProductDetail = () => {
    const itemId = parseInt(useParams().id);
    const [selectImage, setSelectImage] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [selectSize, setSelectSize] = useState("L");
    const standardSizes = ["XS", "S", "M", "L", "XL", "XXL"];
    const initialAddToCartText = "ADD TO CART";
    const [addToCartText, setAddToCartText] = useState(initialAddToCartText);
    const wishList = useSelector((state) => state.cart.wishList);

    const dispatch = useDispatch();
    const { loading, error, data } = useQuery(GetProductDetail, {
        variables: { id: itemId },
    });
    if (error) {
        <ErrorMessage />;
    }
    const image = [
        process.env.REACT_APP_GRAPHQL_URL +
            data?.product?.data?.attributes?.image?.data?.attributes?.url,
        process.env.REACT_APP_GRAPHQL_URL +
            data?.product?.data?.attributes?.image2?.data?.attributes?.url,
    ];
    const detailData = data?.product?.data?.attributes;

    const changeText = () => {
        setAddToCartText("IS NOW ADDED!");
        setTimeout(() => setAddToCartText(initialAddToCartText), [3000]);
    };

    const inWishList = wishList.find(
        (item) => item.id === data?.product?.data.id
    );
    return (
        <>
            {loading ? (
                <IsLoading />
            ) : (
                <Container className="mt-3 mb-5">
                    <Row>
                        <Col md={2} sm={4}>
                            <div className="productImageList">
                                <img
                                    className="listImage"
                                    src={image[0]}
                                    alt=""
                                    onClick={() => setSelectImage(0)}
                                    style={
                                        selectImage === 0
                                            ? { border: "solid 2px black" }
                                            : null
                                    }
                                />
                                <img
                                    className="listImage"
                                    src={image[1]}
                                    alt=""
                                    onClick={() => setSelectImage(1)}
                                    style={
                                        selectImage === 1
                                            ? { border: "solid 2px black" }
                                            : null
                                    }
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
                                <h2 className="mb-3">{detailData.title}</h2>

                                <div style={{ display: "flex", gap: "1rem" }}>
                                    {detailData.oldPrice ? (
                                        <h4
                                            className="oldPrice"
                                            style={{ fontSize: "1.5rem" }}
                                        >
                                            ${detailData.oldPrice}
                                        </h4>
                                    ) : (
                                        ""
                                    )}
                                    <h4
                                        className="newPrice"
                                        style={{ fontSize: "1.5rem" }}
                                    >
                                        ${detailData.newPrice}
                                    </h4>
                                </div>

                                <hr />
                                <h5 className="mb-4">
                                    Color: {detailData.color}
                                </h5>
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
                                        onClick={() =>
                                            setQuantity(quantity - 1)
                                        }
                                    >
                                        -
                                    </button>
                                    <h4 className="quantityNum">{quantity}</h4>
                                    <button
                                        className="quantityButton"
                                        onClick={() =>
                                            setQuantity(quantity + 1)
                                        }
                                    >
                                        +
                                    </button>
                                </div>
                                <div className="mb-4">
                                    <button
                                        className="addToCartButton"
                                        style={
                                            quantity === 0
                                                ? {
                                                      pointerEvents: "none",
                                                      backgroundColor:
                                                          "rgb(74, 74, 74)",
                                                  }
                                                : { pointerEvent: "auto" }
                                        }
                                        onClick={() => {
                                            dispatch(
                                                addToCart({
                                                    id: data.product.data.id,
                                                    title: detailData.title,
                                                    description:
                                                        detailData.description,
                                                    price: detailData.newPrice,
                                                    image: image[0],
                                                    quantity,
                                                    selectSize,
                                                })
                                            );
                                            changeText();
                                        }}
                                    >
                                        <h5 className="addToCartButtonText">
                                            {addToCartText}
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
                                        {inWishList ? (
                                            <div
                                            className="favButton me-3"
                                            onClick={() =>
                                                dispatch(deleteWishList(data.product.data.id))
                                            }
                                        >
                                            <Heartbreak className="me-2" /> REMOVE FROM WISH LIST
                                        </div>
                                        ) : (
                                            <div
                                                className="favButton me-3"
                                                onClick={() => {
                                                    dispatch(
                                                        addToWishList({
                                                            id: data.product
                                                                .data.id,
                                                            title: detailData.title,
                                                            oldPrice:
                                                                detailData.oldPrice,
                                                            newPrice:
                                                                detailData.newPrice,
                                                            image1: image[0],
                                                            image2: image[1],
                                                            isNew: detailData.isNew,
                                                        })
                                                    );
                                                }}
                                            >
                                                <Heart className="me-2" /> ADD
                                                TO WISH LIST
                                            </div>
                                        )}
                                    </Link>
                                    <Link
                                        className=""
                                        to={""}
                                        style={{
                                            textDecoration: "inherit",
                                        }}
                                    >
                                        <div className="compareButton">
                                            <Grid className="me-1" /> ADD TO
                                            COMPARE
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
                                    <p>{detailData.description}</p>
                                    <hr />
                                    <p>{detailData.additionalInfo}</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            )}
        </>
    );
};
