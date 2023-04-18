import React from "react";
import "./List.css";
import { ProductCard } from "../ProductCard/ProductCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useQuery } from "@apollo/client";
import { GetProductsFromCategoryAndSub } from "../GQL/GQLProduct";
import { IsLoading, ErrorMessage } from "../IsLoading/IsLoadingError";

export const List = ({category_ID, maxPrice, sort, selectSubCategory}) => {
    const { loading, error, data } = useQuery(
        GetProductsFromCategoryAndSub(category_ID, selectSubCategory, maxPrice, sort)
    );
    if (error) {
        <ErrorMessage />;
    }

    return (
        <div className="list">
            <Container fluid>
                <Row>
                    {loading ? (
                        <IsLoading />
                    ) : (
                        data.categories.data[0].attributes.products.data?.map(
                            (item) => {
                                return (
                                    <Col
                                        sm
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                        }}
                                        key={item.id}
                                    >
                                        <ProductCard item={item} />
                                    </Col>
                                );
                            }
                        )
                    )}
                </Row>
            </Container>
        </div>
    );
};
