import React, {useState} from "react";
import "./FixedNavBar.css";
import { Search, Person, Heart, Cart } from "react-bootstrap-icons";
import { CartBox } from "./CartBox";

export const FixedNavBar = () => {
    const [openCart, setOpenCart] = useState(false);

    return (
        <>
        <div className="fixedNavBarContainer">
            <button className='fixedIconsButton'>
                <Search className="fixedIcons" />
            </button>
            <button className='fixedIconsButton'>
                <Person className="fixedIcons" />
            </button>
            <button className='fixedIconsButton'>
                <Heart className="fixedIcons" />
            </button>
            <button className='fixedIconsButton' onClick={() => setOpenCart(!openCart)}>
                <Cart className="fixedIcons" />
                <div className='cartNum'>5</div>
            </button>
        </div>
        {openCart && <CartBox/>}
        </>
    );
};
