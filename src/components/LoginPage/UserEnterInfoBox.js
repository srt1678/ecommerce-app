import React, { useState, useContext } from "react";
import "./UserEnterInfoBox.css";
import { AppContext } from "../../App";
import { Google } from "react-bootstrap-icons";
import {
    handleRegistration,
    handleSignIn,
    signInWithGoogle,
} from "../../firebase/FirebaseFunctions";
import { useDispatch } from "react-redux";

export const UserEnterInfoBox = () => {
    const {
        signInRegisterTab,
        setLoginAlert,
        setLoginAlertType,
        setCurrentUser,
    } = useContext(AppContext);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerPassword2, setRegisterPassword2] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const dispatch = useDispatch();

    return (
        <>
            {signInRegisterTab === "signIn" ? (
                <div className="loginFormBox">
                    <div className="emailBox">
                        <input
                            className="emailInput"
                            type="text"
                            placeholder="Email"
                            onChange={(e) => {
                                setLoginEmail(e.target.value);
                                setLoginAlert(false);
                            }}
                        ></input>
                    </div>
                    <div className="passwordBox">
                        <input
                            className="passwordInput"
                            type="password"
                            placeholder="Password"
                            onChange={(e) => {
                                setLoginPassword(e.target.value);
                                setLoginAlert(false);
                            }}
                        ></input>
                    </div>
                    <button
                        className="confirmButton"
                        onClick={() =>
                            handleSignIn(
                                loginEmail,
                                loginPassword,
                                setLoginAlert,
                                setLoginAlertType,
                                setCurrentUser,
                                dispatch
                            )
                        }
                    >
                        SIGN IN
                    </button>
                    <button
                        className="confirmButton"
                        onClick={() =>
                            signInWithGoogle(
                                setCurrentUser,
                                setLoginAlert,
                                setLoginAlertType
                            )
                        }
                        style={{ gap: "1rem" }}
                    >
                        <Google
                            style={{
                                color: "white",
                                backgroundColor: "black",
                                fontSize: "25",
                            }}
                        />
                        GOOGLE SIGN IN
                    </button>
                </div>
            ) : (
                <div className="loginFormBox">
                    <div className="firstNameBox">
                        <input
                            className="firstNameInput"
                            type="text"
                            placeholder="First Name"
                            onChange={(e) => {
                                setFirstName(e.target.value);
                                setLoginAlert(false);
                            }}
                        ></input>
                    </div>
                    <div className="lastNameBox">
                        <input
                            className="lastNameInput"
                            type="text"
                            placeholder="Last Name"
                            onChange={(e) => {
                                setLastName(e.target.value);
                                setLoginAlert(false);
                            }}
                        ></input>
                    </div>
                    <div className="emailBox">
                        <input
                            className="emailInput"
                            type="text"
                            placeholder="Email"
                            onChange={(e) => {
                                setRegisterEmail(e.target.value);
                                setLoginAlert(false);
                            }}
                        ></input>
                    </div>
                    <div className="passwordBox">
                        <input
                            className="passwordInput"
                            type="password"
                            placeholder="Password"
                            onChange={(e) => {
                                setRegisterPassword(e.target.value);
                                setLoginAlert(false);
                            }}
                        ></input>
                    </div>
                    <div className="passwordBox">
                        <input
                            className="passwordInput"
                            type="password"
                            placeholder="Confirm Password"
                            onChange={(e) => {
                                setRegisterPassword2(e.target.value);
                                setLoginAlert(false);
                            }}
                        ></input>
                    </div>
                    <button
                        className="confirmButton"
                        onClick={() =>
                            handleRegistration(
                                firstName,
                                lastName,
                                registerEmail,
                                registerPassword,
                                registerPassword2,
                                setCurrentUser,
                                setLoginAlert,
                                setLoginAlertType
                            )
                        }
                    >
                        REGISTER
                    </button>
                </div>
            )}
        </>
    );
};
