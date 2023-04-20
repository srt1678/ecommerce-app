import React, { useState } from "react";
import "./CategoryPage.css";
import { List } from "../List/List";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useQuery } from "@apollo/client";
import { GetSubCategory } from "../GQL/GQLProduct";
import { IsLoading, ErrorMessage } from "../IsLoading/IsLoadingError";

export const CategoryPage = () => {
    const category_ID = parseInt(useParams().categoryID);
    const { loading, error, data } = useQuery(GetSubCategory(category_ID));
    if (error) {
        <ErrorMessage />;
    }
    const [maxPrice, setMaxPrice] = useState(500);
    const [sort, setSort] = useState("asc");
    const [selectSubCategory, setSelectSubCategory] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;
        setSelectSubCategory(
            isChecked
                ? [...selectSubCategory, value]
                : selectSubCategory.filter((item) => item !== value)
        );
    };

    return (
        <div className="products mt-3">
            <Container fluid>
                <Row>
                    <Col xxl={2}>
                        <div className="left">
                            <div className="filterItem">
                                <h5>Categories</h5>
                                {loading ? (
                                    <IsLoading />
                                ) : (
                                    data.subCategories.data.map(
                                        (singleCategory) => {
                                            const id = singleCategory.id;
                                            return (
                                                <div
                                                    className="inputItem"
                                                    key={id}
                                                >
                                                    <input
                                                        type="checkbox"
                                                        id={id}
                                                        value={id}
                                                        onChange={handleChange}
                                                    />
                                                    <label htmlFor={id}>
                                                        {
                                                            singleCategory
                                                                .attributes
                                                                .sub_category_title
                                                        }
                                                    </label>
                                                </div>
                                            );
                                        }
                                    )
                                )}
                            </div>
                            <div className="filterItem">
                                <h5>Filter by price</h5>
                                <div className="inputItem">
                                    <input
                                        type="radio"
                                        name="price"
                                        onChange={(e) => setMaxPrice(100)}
                                    />
                                    <label htmlFor="asc">{"< $100"}</label>
                                </div>
                                <div className="inputItem">
                                    <input
                                        type="radio"
                                        name="price"
                                        onChange={(e) => setMaxPrice(200)}
                                    />
                                    <label htmlFor="desc">{"< $200"}</label>
                                </div>
                                <div className="inputItem">
                                    <input
                                        type="radio"
                                        name="price"
                                        onChange={(e) => setMaxPrice(300)}
                                    />
                                    <label htmlFor="desc">{"< $300"}</label>
                                </div>
                                <div className="inputItem">
                                    <input
                                        type="radio"
                                        name="price"
                                        onChange={(e) => setMaxPrice(400)}
                                    />
                                    <label htmlFor="desc">{"< $400"}</label>
                                </div>
                                <div className="inputItem">
                                    <input
                                        type="radio"
                                        name="price"
                                        onChange={(e) => setMaxPrice(500)}
                                    />
                                    <label htmlFor="desc">{"< $500"}</label>
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
                                        onChange={(e) => setSort("up")}
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
                                        onChange={(e) => setSort("down")}
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
                            {loading ? (
                                <IsLoading />
                            ) : (
                                <div style={{ position: "relative" }}>
                                    <div>
                                        <img
                                            className="slider_image"
                                            src={
                                                process.env
                                                    .REACT_APP_GRAPHQL_URL +
                                                data?.categories?.data[0]
                                                    ?.attributes?.category_image
                                                    ?.data?.attributes?.url
                                            }
                                            alt=""
                                        />
                                    </div>
                                </div>
                            )}
                            <List
                                category_ID={category_ID}
                                maxPrice={maxPrice}
                                sort={sort}
                                selectSubCategory={selectSubCategory}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
