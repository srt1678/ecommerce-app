import React from "react";
import "./CartBox.css";
import { Trash } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem, resetCart } from "../../redux/cartReducer";
import { loadStripe } from "@stripe/stripe-js";
import { createRequest } from "../../createRequest";

export const CartBox = () => {
    const cartProducts = useSelector((state) => state.cart.products);
    const sizeReducer = useSelector((state) => state.cart.size);
    const dispatch = useDispatch();

    const totalPrice = () => {
        let total = 0;
        cartProducts.forEach((item) => (total += item.quantity * item.price));
        return total.toFixed(2);
    };

    console.log(cartProducts);
    const stripePromise = loadStripe(process.env.REACT_APP_STRIP_PUBLIC_KEY);
    const handlePayment = async () => {
        try {
            const stripe = await stripePromise;
            const response = await createRequest.post("/api/orders", {
                cartProducts,
            });
            await stripe.redirectToCheckout({
                sessionId: response.data.stripeSession.id,
            });
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="cartBoxContainer">
            <h4 className="mb-3">Products in your cart</h4>
            {cartProducts?.map((singleItem) => {
                return (
                    <div className="cartItem" key={singleItem.id}>
                        <img
                            className="cartImage"
                            src={singleItem.image}
                            alt=""
                        />
                        <div className="details">
                            <h5>{singleItem.title}</h5>
                            <p>{singleItem.description?.substring(0, 50)}</p>
                            <div className="priceAndSize">
                                <div className="itemPrice">
                                    ${singleItem.price} x {singleItem.quantity}
                                </div>
                                <div className="sizeList">
                                    Size: {""}
                                    {sizeReducer.map((obj) => {
                                        if (obj.id === singleItem.id) {
                                            return (
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        gap: "0.5rem",
                                                    }}
                                                    key={obj.id}
                                                >
                                                    {obj.listSize.map(
                                                        (singleSize) => {
                                                            return (
                                                                <div
                                                                    style={{
                                                                        backgroundColor:
                                                                            "white",
                                                                    }}
                                                                    key={
                                                                        singleSize.size +
                                                                        singleSize.count
                                                                    }
                                                                >
                                                                    {"("}
                                                                    {
                                                                        singleSize.size
                                                                    }{" "}
                                                                    x{" "}
                                                                    {
                                                                        singleSize.count
                                                                    }
                                                                    {")"}
                                                                </div>
                                                            );
                                                        }
                                                    )}
                                                </div>
                                            );
                                        }
                                    })}
                                </div>
                            </div>
                        </div>
                        <div>
                            <Trash
                                className="trashIcon"
                                onClick={() =>
                                    dispatch(deleteItem(singleItem.id))
                                }
                            />
                        </div>
                    </div>
                );
            })}
            <div className="totalPrice mb-3">
                <span>SUBTOTAL</span>
                <span>$ {totalPrice()}</span>
            </div>
            <div className="checkoutButtonContainer mb-3">
                <button
                    className="checkoutButton"
                    onClick={() => handlePayment()}
                >
                    PROCEED TO CHECKOUT
                </button>
            </div>
            <div className="resetButton">
                <span
                    className="resetCart"
                    onClick={() => dispatch(resetCart())}
                >
                    Reset Cart
                </span>
            </div>
        </div>
    );
};
