import React from "react";
import "./CategoryPage.css";

export const FilterItem = (props) => {
    return (
        <>
            <div className="filterItem">
                <h5>Filter by price</h5>
                <div className="inputItem">
                    <input
                        type="radio"
                        name="price"
                        onChange={(e) => props.setMaxPrice(100)}
                    />
                    <label htmlFor="asc">{"< $100"}</label>
                </div>
                <div className="inputItem">
                    <input
                        type="radio"
                        name="price"
                        onChange={(e) => props.setMaxPrice(200)}
                    />
                    <label htmlFor="desc">{"< $200"}</label>
                </div>
                <div className="inputItem">
                    <input
                        type="radio"
                        name="price"
                        onChange={(e) => props.setMaxPrice(300)}
                    />
                    <label htmlFor="desc">{"< $300"}</label>
                </div>
                <div className="inputItem">
                    <input
                        type="radio"
                        name="price"
                        onChange={(e) => props.setMaxPrice(400)}
                    />
                    <label htmlFor="desc">{"< $400"}</label>
                </div>
                <div className="inputItem">
                    <input
                        type="radio"
                        name="price"
                        onChange={(e) => props.setMaxPrice(500)}
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
                        onChange={(e) => props.setSort("up")}
                    />
                    <label htmlFor="asc">Price (Lowest first)</label>
                </div>
                <div className="inputItem">
                    <input
                        type="radio"
                        id="desc"
                        value="desc"
                        name="price"
                        onChange={(e) => props.setSort("down")}
                    />
                    <label htmlFor="desc">Price (Highest first)</label>
                </div>
            </div>
        </>
    );
};
