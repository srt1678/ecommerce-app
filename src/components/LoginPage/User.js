import React from "react";
import "./User.css";
import { SignInReg } from "./SignInReg";
import { UserEnterInfoBox } from "./UserEnterInfoBox";

export const User = () => {
    return (
        <>
            <div className="loginContainer">
                <div className="loginFormContainer">
                    <div className="signInRegisterLine">
                        <SignInReg />
                    </div>
                    <UserEnterInfoBox />
                </div>
            </div>
        </>
    );
};
