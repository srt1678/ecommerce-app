import React, { useContext } from "react";
import { AppContext } from "../../App";
import { useQuery } from "@apollo/client";
import { SearchProduct } from "../GQL/GQLProduct";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { IsLoading } from "../IsLoading/IsLoadingError";

export const Search = () => {
    const { searchQuery } = useContext(AppContext);
    const { loading, data } = useQuery(SearchProduct(searchQuery));

    return (
        <>
            {loading ? (
                <IsLoading />
            ) : (
                <>
                    {!searchQuery || data.products.data.length == 0 ? (
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '3rem', marginTop: '3rem'}}>
                            <h5 style={{color: "rgb(119, 118, 118)", fontWeight: '400'}}>NO RESULT FOR "{searchQuery}"</h5>
                            </div>
                    ) : (
                        <Container className="my-5">
                            <Row>
                                {data.products.data.map((item) => {
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
                                                        {item.attributes
                                                            .isNew && (
                                                            <span>
                                                                New Season
                                                            </span>
                                                        )}
                                                        {item.attributes
                                                            .oldPrice && (
                                                            <span>
                                                                On Sales
                                                            </span>
                                                        )}
                                                        <img
                                                            src={
                                                                process.env
                                                                    .REACT_APP_GRAPHQL_URL +
                                                                item.attributes
                                                                    .image.data
                                                                    .attributes
                                                                    .url
                                                            }
                                                            alt=""
                                                            className="card_mainImg"
                                                        />
                                                        <img
                                                            src={
                                                                process.env
                                                                    .REACT_APP_GRAPHQL_URL +
                                                                item.attributes
                                                                    .image2.data
                                                                    .attributes
                                                                    .url
                                                            }
                                                            alt=""
                                                            className="card_secondImg"
                                                        />
                                                    </div>
                                                    <h3>
                                                        {item.attributes.title}
                                                    </h3>
                                                    <div className="card_prices mb-4">
                                                        {item.attributes
                                                            .oldPrice ? (
                                                            <h4 className="oldPrice">
                                                                $
                                                                {
                                                                    item
                                                                        .attributes
                                                                        .oldPrice
                                                                }
                                                            </h4>
                                                        ) : (
                                                            ""
                                                        )}
                                                        <h4 className="newPrice">
                                                            $
                                                            {
                                                                item.attributes
                                                                    .newPrice
                                                            }
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
            )}
        </>
    );
};
