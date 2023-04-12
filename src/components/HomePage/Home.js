import React from "react";
import Slider from "./Slider";
import FeaturedProducts from "./FeaturedProducts";
import Categories from "./Categories";

export const Home = () => {
    return (
        <>
            <div className="home">
                <Slider />
                <FeaturedProducts type='Trending'/>
                <Categories/>
                <FeaturedProducts type='Featured'/>
            </div>
        </>
    );
};
