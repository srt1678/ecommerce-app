import React from "react";
import './ProductDetail.css';

export const QuantityButton = (props) => {
    return (
        <>
            <button
                className="quantityButton"
                style={
                    props.quantity === 0
                        ? {
                              pointerEvents: "none",
                              backgroundColor: "rgb(238, 238, 238)",
                          }
                        : { pointerEvents: "auto" }
                }
                onClick={() => props.setQuantity(props.quantity - 1)}
            >
                -
            </button>
            <h4 className="quantityNum">{props.quantity}</h4>
            <button
                className="quantityButton"
                onClick={() => props.setQuantity(props.quantity + 1)}
            >
                +
            </button>
        </>
    );
};
