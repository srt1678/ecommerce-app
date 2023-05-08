import React, { useState, useContext } from "react";
import "./FixedNavBar.css";
import { PlusLg, Search, Person, Heart, Cart, Grid } from "react-bootstrap-icons";
import { CartBox } from "./CartBox";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../App";

export const FixedNavBar = () => {
    const [openCart, setOpenCart] = useState(false);
    const [searchBarText, setSearchBarText] = useState("");
    const { setSearchQuery, clickOnSearch, setClickOnSearch } = useContext(AppContext);
    const cartProducts = useSelector((state) => state.cart.products);
    const wishList = useSelector((state) => state.cart.wishList);
    const navigate = useNavigate();

    const handleNavigation = (pageName) => {
        navigate(`/${pageName}`);
    };

    return (
        <>
            <div className="fixedNavBarContainer">
                {clickOnSearch ? (
                    <>
                        <button
                            className={`fixedIconsButton ${
                                !clickOnSearch ? "" : "rotate"
                            }`}
                            onClick={() => {
                                setClickOnSearch(!clickOnSearch);
                                setSearchBarText("");
                            }}
                        >
                            <PlusLg className="fixedIcons" />
                        </button>
                        <div className="searchBarContainer">
                            <input
                                className="searchBar"
                                type="text"
                                value={searchBarText}
                                placeholder="Search..."
                                onChange={(e) =>
                                    setSearchBarText(e.target.value)
                                }
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        handleNavigation("search");
                                        setClickOnSearch(!clickOnSearch);
                                        setSearchQuery(searchBarText);
                                        setSearchBarText("");
                                    }
                                }}
                            ></input>
                        </div>
                    </>
                ) : (
                    <>
                        <button
                            className={`fixedIconsButton ${
                                !clickOnSearch ? "" : "rotate"
                            }`}
                            onClick={() => setClickOnSearch(!clickOnSearch)}
                        >
                            <Search className="fixedIcons"/>
                        </button>
                        <button className="fixedIconsButton" onClick={() => handleNavigation("comparison")}>
                            <Grid className="fixedIcons" />
                        </button>
                        <button className="fixedIconsButton" onClick={() => handleNavigation("registerLogin")}>
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
                    </>
                )}
            </div>
            {openCart && <CartBox />}
        </>
    );
};
