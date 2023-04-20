import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

export const ProductCard = ({ item }) => {
    return (
        <>
            <Link
                className="card_link"
                to={`/product/${item.id}`}
                style={{ textDecoration: "inherit", color: "inherit" }}
            >
                <div className="card">
                    <div className="card_image">
                        {item?.attributes.isNew && <span>New Season</span>}
                        {item?.attributes.oldPrice && <span>On Sales</span>}
                        <img
                            src={
                                process.env.REACT_APP_GRAPHQL_URL +
                                item.attributes?.image?.data?.attributes?.url
                            }
                            alt=""
                            className="card_mainImg"
                        />
                        {item.attributes.image2.data? (<img
                            src={
                                process.env.REACT_APP_GRAPHQL_URL +
                                item.attributes?.image2?.data?.attributes?.url
                            }
                            alt=""
                            className="card_secondImg"
                        />): null}
                        
                    </div>
                    <h3>{item?.attributes.title}</h3>
                    <div className="card_prices mb-4">
                        {item?.attributes.oldPrice ? (
                            <h4 className="oldPrice">
                                ${item?.attributes.oldPrice}
                            </h4>
                        ) : (
                            ""
                        )}
                        <h4 className="newPrice">
                            ${item?.attributes.newPrice}
                        </h4>
                    </div>
                </div>
            </Link>
        </>
    );
};
