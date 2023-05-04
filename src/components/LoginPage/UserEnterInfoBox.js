import React, { useState, useContext } from "react";
import "./UserEnterInfoBox.css";
import { AppContext } from "../../App";
import { app, database } from "../../firebase/firebaseConfig";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import {
    collection,
    addDoc,
    setDoc,
    getDocs,
    doc,
    updateDoc,
    deleteDoc,
    query,
    where,
} from "firebase/firestore";
import { LoginAlert } from "./LoginAlert";

export const UserEnterInfoBox = () => {
    const {
        signInRegisterTab,
        setLoginAlert,
        setLoginAlertType,
        currentUser,
        setCurrentUser,
    } = useContext(AppContext);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerPassword2, setRegisterPassword2] = useState("");

    const collectionRef = collection(database, "users");
    let auth = getAuth(app);
    let googleProvider = new GoogleAuthProvider();

    const handleRegistration = async () => {
        if (registerPassword !== registerPassword2) {
            setLoginAlertType(
                "Registration Failed! Confirmed Password is incorrect!"
            );
        }
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            try {
                setDoc(doc(collectionRef, user.user.uid), {
                    firstName,
                    lastName,
                    email: registerEmail,
                    password: registerPassword,
                });
                setCurrentUser({
                    firstName, lastName, 
                    email: registerEmail,
                    password: registerPassword,
                    uid: user.user.uid
                });
                console.log(currentUser);
            } catch (err) {
                setLoginAlert(true);
                alert(err.message);
                setLoginAlertType("");
            }
        } catch (err) {
            setLoginAlert(true);
            setLoginAlertType(
                "Email is already-in-use! Please register with another email!"
            );
        }
    };

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
                    <button className="confirmButton">SIGN IN</button>
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
                        onClick={() => handleRegistration()}
                    >
                        REGISTER
                    </button>
                </div>
            )}
        </>
    );
};
