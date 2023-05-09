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
import { FilterItem } from "./FilterItem";

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
                    <Col>
                        {loading ? (
                            <IsLoading />
                        ) : (
                            <div style={{ position: "relative" }}>
                                <div className="sliderImageContainer">
                                    <img
                                        className="slider_image"
                                        src={
                                            process.env.REACT_APP_GRAPHQL_URL +
                                            data?.categories?.data[0]
                                                ?.attributes?.category_image
                                                ?.data?.attributes?.url
                                        }
                                        alt=""
                                    />
                                </div>
                            </div>
                        )}
                    </Col>
                </Row>
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
                            <FilterItem
                                setMaxPrice={setMaxPrice}
                                setSort={setSort}
                            />
                        </div>
                    </Col>
                    <Col xxl={10}>
                        <List
                            category_ID={category_ID}
                            maxPrice={maxPrice}
                            sort={sort}
                            selectSubCategory={selectSubCategory}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
