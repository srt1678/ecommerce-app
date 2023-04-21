import React, { useEffect } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetCart } from "../../redux/cartReducer";

export const Complete = () => {
    const { width } = useWindowSize();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleReturnHome = () => {
        navigate("/");
    };

    useEffect(() => {
        dispatch(resetCart());
    }, []);

    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                    height: "20rem",
                    overflow: "hidden",
                }}
            >
                <Confetti width={width} style={{ zIndex: "0" }} />
                <div
                    style={{
                        zIndex: "5",
                        marginTop: "1rem",
                        marginBottom: "1rem",
                    }}
                >
                    <h1>Transaction Complete!</h1>
                </div>
                <div
                    style={{
                        zIndex: "5",
                        marginTop: "1rem",
                        marginBottom: "1rem",
                    }}
                >
                    <button
                        className="checkoutButton"
                        onClick={() => handleReturnHome()}
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        </>
    );
};
