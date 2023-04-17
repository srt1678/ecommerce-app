import React from "react";
import Slider from "./Slider";
import FeaturedProducts from "./FeaturedProducts";
import CategoriesBoxes from "./CategoriesBoxes";
import { useQuery, gql } from "@apollo/client";
import { PRODUCTS } from "../GQL/GQLProduct";


export const Home = () => {
    const { loading, error, data } = useQuery(PRODUCTS);
    if(loading){
        return <p>Loading</p>
    }else if(error){
        return <p>Error</p>
    }else{
        console.log(data);
    }
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
