import React from "react";
import Slider from "./Slider";
import FeaturedProducts from "./FeaturedProducts";
import CategoriesBoxes from "./CategoriesBoxes";

export const Home = () => {
    return (
        <>
            <div className="home">
                <Slider />
                <FeaturedProducts type="Trending" />
                <CategoriesBoxes />
                <FeaturedProducts type="Featured" />
            </div>
        </>
    );
};
