import React, { useState } from "react";
import "./FixedNavBar.css";
import { Search, Person, Heart, Cart } from "react-bootstrap-icons";
import { CartBox } from "./CartBox";
import { useSelector } from "react-redux";

export const FixedNavBar = () => {
    const [openCart, setOpenCart] = useState(false);
    const cartProducts = useSelector((state) => state.cart.products);

    return (
        <>
            <div className="fixedNavBarContainer">
                <button className="fixedIconsButton">
                    <Search className="fixedIcons" />
                </button>
                <button className="fixedIconsButton">
                    <Person className="fixedIcons" />
                </button>
                <button className="fixedIconsButton">
                    <Heart className="fixedIcons" />
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
