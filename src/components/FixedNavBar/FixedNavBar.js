import React, { useState } from "react";
import "./FixedNavBar.css";
import { Search, Person, Heart, Cart } from "react-bootstrap-icons";
import { CartBox } from "./CartBox";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const FixedNavBar = () => {
    const [openCart, setOpenCart] = useState(false);
    const cartProducts = useSelector((state) => state.cart.products);
    const wishList = useSelector((state) => state.cart.wishList);
    const navigate = useNavigate();

    const handleNavigation = (pageName) => {
        navigate(`/${pageName}`);
    };

    return (
        <>
            <div className="fixedNavBarContainer">
                <button className="fixedIconsButton">
                    <Search className="fixedIcons" />
                </button>
                <button className="fixedIconsButton">
                    <Person className="fixedIcons" />
                </button>
                <button
                    className="fixedIconsButton"
                    onClick={() => handleNavigation("wishList")}
                >
                    <Heart className="fixedIcons" />
                    <div className="wishListNum">{wishList.length}</div>
                </button>
                <button
                    className="fixedIconsButton"
                    onClick={() => setOpenCart(!openCart)}
                >
                    <Cart className="fixedIcons" />
                    <div className="cartNum">{cartProducts.length}</div>
                </button>
            </div>
            {openCart && <CartBox />}
        </>
    );
};
