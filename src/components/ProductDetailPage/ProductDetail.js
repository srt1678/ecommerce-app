import React, { useState, useContext } from "react";
import { AppContext } from "../../App";
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
import { deleteWishList } from "../../redux/reduxReducer";
import {
    addToWishListToFirebase,
    addToCartToFirebase,
    deleteItemFromWishListFirebase,
} from "../../firebase/FirebaseStripe";
import { LoginAlert } from "../LoginPage/LoginAlert";
import { StandardSize } from "./StandardSize";
import { QuantityButton } from "./QuantityButton";

export const ProductDetail = () => {
    const itemId = parseInt(useParams().id);
    const [selectImage, setSelectImage] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [selectSize, setSelectSize] = useState("L");
    const initialAddToCartText = "ADD TO CART";
    const [addToCartText, setAddToCartText] = useState(initialAddToCartText);
    const wishList = useSelector((state) => state.cart.wishList);
    const {
        currentUser,
        loginAlert,
        setLoginAlert,
        setLoginAlertType,
        comparisonArray,
        setComparisonArray,
    } = useContext(AppContext);

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
    ];
    if (data?.product?.data?.attributes?.image2?.data?.attributes?.url) {
        image[1] =
            process.env.REACT_APP_GRAPHQL_URL +
            data?.product?.data?.attributes?.image2?.data?.attributes?.url;
    }
    const detailData = data?.product?.data?.attributes;

    const changeText = () => {
        if (Object.keys(currentUser).length !== 0) {
            setAddToCartText("IS NOW ADDED!");
            setTimeout(() => setAddToCartText(initialAddToCartText), [3000]);
        }
    };
    const handleAddComparison = () => {
        const comparisonObj = {
            id: data.product.data.id,
            title: detailData.title,
            price: detailData.newPrice,
            color: detailData.color,
            image: image[0],
            material: detailData.additionalInfo,
        };
        setComparisonArray((comparisonArray) => [
            ...comparisonArray,
            comparisonObj,
        ]);
    };
    const handleRemoveComparison = () => {
        setComparisonArray(
            comparisonArray.filter((product) => product.id != itemId)
        );
    };

    const inWishList = wishList.find(
        (item) => item.id === data?.product?.data.id
    );
    let inComparison = false;
    const findComparison = () => {
        comparisonArray.map((obj) => {
            if (obj.id == itemId) {
                inComparison = true;
            }
        });
    };
    findComparison();

    return (
        <>
            {loginAlert ? <LoginAlert /> : null}
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
                                {image[1] ? (
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
                                ) : null}
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
                                    <QuantityButton
                                        quantity={quantity}
                                        setQuantity={setQuantity}
                                    />
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
                                                : {
                                                      outline:
                                                          "solid 1.5px white",
                                                      outlineOffset: "-3px",
                                                  }
                                        }
                                        onClick={() => {
                                            addToCartToFirebase(
                                                data,
                                                detailData,
                                                image,
                                                currentUser,
                                                selectSize,
                                                quantity,
                                                setLoginAlertType,
                                                setLoginAlert,
                                                dispatch
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
                                                onClick={() => {
                                                    dispatch(
                                                        deleteWishList(
                                                            data.product.data.id
                                                        )
                                                    );
                                                    deleteItemFromWishListFirebase(
                                                        currentUser,
                                                        data.product.data.id
                                                    );
                                                }}
                                            >
                                                <Heartbreak className="me-2" />{" "}
                                                REMOVE FROM WISH LIST
                                            </div>
                                        ) : (
                                            <div
                                                className="favButton me-3"
                                                onClick={() => {
                                                    addToWishListToFirebase(
                                                        data.product.data.id,
                                                        detailData.title,
                                                        detailData.oldPrice,
                                                        detailData.newPrice,
                                                        image[0],
                                                        image[1],
                                                        detailData.isNew,
                                                        setLoginAlertType,
                                                        setLoginAlert,
                                                        currentUser,
                                                        dispatch
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
                                        {inComparison ? (
                                            <div
                                                className="compareButton"
                                                onClick={() => {
                                                    handleRemoveComparison();
                                                }}
                                            >
                                                <Grid className="me-1" /> REMOVE
                                                FROM COMPARE
                                            </div>
                                        ) : comparisonArray.length < 5 ? (
                                            <div
                                                className="compareButton"
                                                onClick={() => {
                                                    handleAddComparison();
                                                }}
                                            >
                                                <Grid className="me-1" /> ADD TO
                                                COMPARE
                                            </div>
                                        ) : (
                                            <div className="compareButton" style={{cursor: 'default', color: 'red'}}>
                                                <Grid className="me-1" /> COMPARISON EXCEED
                                                MAXIUM
                                            </div>
                                        )}
                                    </Link>
                                </div>
                                <hr />
                                <div className="selectSizesContainer">
                                    <StandardSize
                                        setSelectSize={setSelectSize}
                                        selectSize={selectSize}
                                    />
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
