import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./FeaturedProducts.css";
import { ProductCard } from "../ProductCard/ProductCard";

const FeaturedProducts = ({ type }) => {
    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Long Sleeve Graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Coat",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Skirt",
            oldPrice: 19,
            price: 12,
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Hat",
            oldPrice: 19,
            price: 12,
        },
    ];
    return (
        <>
            <Container className='my-5'>
                <Row className="featured_container align-items-center mb-4">
                    <Col md={6} sm={12} className='featured_col'>
                        <h1>{type} Products</h1>
                    </Col>
                    <Col md={6} sm={12} className='featured_col'>
                        <p className='featured_para'>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </p>
                    </Col>
                </Row>
                <Row>
                    {data.map((item) => {
                        return (
                            <Col sm style={{display: 'flex', justifyContent: 'center'}} key={item.id}>
                                <ProductCard item={item} />
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </>
    );
};

export default FeaturedProducts;

