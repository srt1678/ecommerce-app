import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./FeaturedProducts.css";
import { ProductCard } from "../ProductCard/ProductCard";

import { useQuery} from "@apollo/client";
import { GetFeaturedTrendingProduct } from "../GQL/GQLProduct";
import { IsLoading, ErrorMessage } from "../IsLoading/IsLoadingError";

const FeaturedProducts = ({ type }) => {
    const { loading, error, data } = useQuery(GetFeaturedTrendingProduct(type));
    if(error){
        <ErrorMessage/>
    }

    return (
        <>
            <Container className="my-5">
                <Row className="featured_container align-items-center mb-4">
                    <Col md={6} sm={12} className="featured_col">
                        <h1>{type} Products</h1>
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
                    {loading? (<IsLoading/>) : (data.products.data.map((item) => {
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
                    }))}
                </Row>
            </Container>
        </>
    );
};

export default FeaturedProducts;
