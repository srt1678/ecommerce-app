import React from "react";
import Slider from "./Slider";
import FeaturedProducts from "./FeaturedProducts";
import CategoriesBoxes from "./CategoriesBoxes";
import { useQuery, gql } from "@apollo/client";
import { PRODUCTS } from "../GQL/GQLProduct";


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
