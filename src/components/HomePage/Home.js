import React from "react";
import Slider from "./Slider";
import FeaturedProducts from "./FeaturedProducts";

export const Home = () => {
    return (
        <>
            <div className="home">
                <Slider />
                <FeaturedProducts type='Trending'/>
                <FeaturedProducts type='Featured'/>
            </div>
        </>
    );
};
