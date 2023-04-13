import React, { useState } from "react";
import "./CategoryPage.css";
import { List } from "../List/List";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import productSliderImage from "../img/product_slider.jpg";

export const CategoryPage = () => {
    const category = useParams().category;
    const [maxPrice, setMaxPrice] = useState(1000);
    const [sort, setSort] = useState(null);

    return (
        <div className="products mt-3">
            <Container fluid>
                <Row>
                    <Col xxl={2}>
                        <div className="left">
                            <div className="filterItem">
                                <h5>Product Categories</h5>
                                <div className="inputItem">
                                    <input type="checkbox" id="1" value={1} />
                                    <label htmlFor="1">Shoes</label>
                                </div>
                                <div className="inputItem">
                                    <input type="checkbox" id="2" value={2} />
                                    <label htmlFor="2">Skirts</label>
                                </div>
                                <div className="inputItem">
                                    <input type="checkbox" id="3" value={3} />
                                    <label htmlFor="3">Coats</label>
                                </div>
                            </div>
                            <div className="filterItem">
                                <h5>Filter by price</h5>
                                <div className="inputItem">
                                    <span>0</span>
                                    <input
                                        type="range"
                                        min={0}
                                        max={1000}
                                        onChange={(e) =>
                                            setMaxPrice(e.target.value)
                                        }
                                    />
                                    <span>{maxPrice}</span>
                                </div>
                            </div>
                            <div className="filterItem">
                                <h5>Sort by</h5>
                                <div className="inputItem">
                                    <input
                                        type="radio"
                                        id="asc"
                                        value="asc"
                                        name="price"
                                        onChange={(e) => setSort("asc")}
                                    />
                                    <label htmlFor="asc">
                                        Price (Lowest first)
                                    </label>
                                </div>
                                <div className="inputItem">
                                    <input
                                        type="radio"
                                        id="desc"
                                        value="desc"
                                        name="price"
                                        onChange={(e) => setSort("desc")}
                                    />
                                    <label htmlFor="desc">
                                        Price (Highest first)
                                    </label>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xxl={10}>
                        <div className="right">
                            <div style={{ position: "relative" }}>
                                <div>
                                    <img
                                        className="slider_image"
                                        src={productSliderImage}
                                        alt=""
                                    />
                                </div>
                            </div>
                            <List
                                category={category}
                                maxPrice={maxPrice}
                                sort={sort}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
