import React, { useContext } from "react";
import "./User.css";
import { SignInReg } from "./SignInReg";
import { UserEnterInfoBox } from "./UserEnterInfoBox";
import { LoginAlert } from "./LoginAlert";
import { AppContext } from "../../App";
import { logOut } from "../../firebase/FirebaseFunctions";

export const User = () => {
    const {
        loginAlert,
        setLoginAlert,
        setLoginAlertType,
        currentUser,
        setCurrentUser,
        signInRegisterTab,
    } = useContext(AppContext);

    return (
        <>
            {loginAlert ? <LoginAlert /> : null}
            <div className="loginContainer">
                <div
                    className="loginFormContainer"
                    style={
                        Object.keys(currentUser).length !== 0
                            ? {
                                  height: "29rem",
                              }
                            : signInRegisterTab === "signIn"
                            ? { height: "27rem" }
                            : { paddintTop: "0px", height: "35rem" }
                    }
                >
                    {Object.keys(currentUser).length === 0 ? (
                        <>
                            <div className="signInRegisterLine">
                                <SignInReg />
                            </div>
                            <UserEnterInfoBox />
                        </>
                    ) : (
                        <>
                            <div className="welcomeSignedInBox">
                                <h5 className="welcomeText">WELCOME BACK,</h5>
                                <h4 className="welcomeText">
                                    {"{ "}
                                    {currentUser.firstName.toUpperCase()}
                                    {" }"}
                                </h4>
                                <h5 className="welcomeText mb-4">
                                    YOU ARE NOW SIGNED IN!
                                </h5>
                                <span className="welcomeTextSpan">
                                    Get $5 rewards, track your order, save your
                                    favorites, & more!
                                </span>
                                <span className="welcomeTextSpan mb-4">
                                    Don't miss the limited time offer! Up to 25%
                                    Off!
                                </span>
                                <button
                                    className="signOutButton"
                                    onClick={() =>
                                        logOut(
                                            setCurrentUser,
                                            setLoginAlert,
                                            setLoginAlertType
                                        )
                                    }
                                >
                                    SIGN OUT
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};
