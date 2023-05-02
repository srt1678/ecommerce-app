import React, { useContext } from "react";
import "./SignInReg.css";
import { AppContext } from "../../App";


export const SignInReg = () => {
    const { signInRegisterTab, setSignInRegisterTab } = useContext(AppContext);
    return (
        <>
            <button
                className="signInRegisterButton"
                onClick={() => setSignInRegisterTab("signIn")}
                style={
                    signInRegisterTab === "signIn"
                        ? {
                              backgroundColor: "black",
                              color: "white",
                              outline: "solid 1.5px white",
                          }
                        : {
                              backgroundColor: "rgb(218, 217, 217)",
                              border: "solid 1.5px black",
                              outline: "solid 1.5px black",
                          }
                }
            >
                SIGN IN
            </button>
            <button
                className="signInRegisterButton"
                onClick={() => setSignInRegisterTab("register")}
                style={
                    signInRegisterTab === "register"
                        ? {
                              backgroundColor: "black",
                              color: "white",
                              outline: "solid 1.5px white",
                          }
                        : {
                              backgroundColor: "rgb(218, 217, 217)",
                              border: "solid 1.5px black",
                              outline: "solid 1.5px black",
                          }
                }
            >
                REGISTER
            </button>
        </>
    );
};
