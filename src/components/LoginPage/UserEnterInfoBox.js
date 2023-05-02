import React, { useContext } from "react";
import "./UserEnterInfoBox.css";
import { AppContext } from "../../App";

export const UserEnterInfoBox = () => {
    const { signInRegisterTab, setSignInRegisterTab } = useContext(AppContext);

    return (
        <>
            {signInRegisterTab === "signIn" ? (
                <div className="loginFormBox">
                    <div className="emailBox">
                        <input
                            className="emailInput"
                            type="text"
                            placeholder="Email"
                        ></input>
                    </div>
                    <div className="passwordBox">
                        <input
                            className="passwordInput"
                            type="password"
                            placeholder="Password"
                        ></input>
                    </div>
                    <button className='confirmButton'>
                        SIGN IN
                    </button>
                </div>
            ) : (
                <div className="loginFormBox">
                    <div className="emailBox">
                        <input
                            className="emailInput"
                            type="text"
                            placeholder="Email"
                        ></input>
                    </div>
                    <div className="passwordBox">
                        <input
                            className="passwordInput"
                            type="password"
                            placeholder="Password"
                        ></input>
                    </div>
                    <div className="passwordBox">
                        <input
                            className="passwordInput"
                            type="password"
                            placeholder="Confirm Password"
                        ></input>
                    </div>
                    <button className='confirmButton'>
                        REGISTER
                    </button>
                </div>
            )}
        </>
    );
};
