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
                        {item.isNew && <span>New Season</span>}
                        <img src={item.img} alt="" className="card_mainImg" />
                        {item.img2 ? (
                            <img
                                src={item.img2}
                                alt=""
                                className="card_secondImg"
                            />
                        ): null}
                    </div>
                    <h3>{item.title}</h3>
                    <div className="card_prices mb-4">
                        <h4>${item.oldPrice}</h4>
                        <h4>${item.price}</h4>
                    </div>
                </div>
            </Link>
        </>
    );
};
