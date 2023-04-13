import React from "react";
import "./CartBox.css";
import { Trash } from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const CartBox = () => {
    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Long Sleeve Graphic T-shirt",
            desc: "Long Sleeve Graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Coat",
            desc: "Long Sleeve Graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
    ];
    return (
        <div className="cartBoxContainer">
            <h4 className='mb-3'>Products in your cart</h4>
            {data?.map((singleItem) => {
                return (
                    <div className="cartItem" key={singleItem.id}>
                        <img
                            className="cartImage"
                            src={singleItem.img}
                            alt=""
                        />
                        <div className="details">
                            <h5>{singleItem.title}</h5>
                            <p>{singleItem.desc?.substring(0, 100)}</p>
                            <div className="itemPrice">
                                1 x ${singleItem.price}
                            </div>
                        </div>
                        <div>
                            <Trash className="trashIcon" />
                        </div>
                    </div>
                );
            })}
            <div className="totalPrice mb-3">
                <span>SUBTOTAL</span>
                <span>$123</span>
            </div>
            <div className='checkoutButtonContainer mb-3'>
                <button className='checkoutButton'>PROCEED TO CHECKOUT</button>
            </div>
            <div className='resetButton'>
                <span className="resetCart">Reset Cart</span>
            </div>
        </div>
    );
};
