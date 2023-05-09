import React from "react";
import Slider from "./Slider";
import FeaturedProducts from "./FeaturedProducts";
import CategoriesBoxes from "./CategoriesBoxes";
import { DarkBanner } from "./DarkBanner";

export const Home = () => {
    return (
        <>
            <div className="home">
                <Slider />
                <FeaturedProducts type="Trending" />
                <CategoriesBoxes />
                <FeaturedProducts type="Featured" />
                <DarkBanner/>
            </div>
        </>
    );
};
