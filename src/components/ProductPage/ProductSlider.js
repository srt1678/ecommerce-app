import React from "react";
import productSliderImage from "../img/product_slider.jpg";
import "./ProductSlider.css";

export const ProductSlider = () => {
    return (
        <div style={{ position: "relative"}}>
            <div>
                <img className="slider_image" src={productSliderImage} alt="" />
            </div>
        </div>
    );
};
