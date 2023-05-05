import React, { useState, useContext } from "react";
import "./UserEnterInfoBox.css";
import { AppContext } from "../../App";
import { Google } from "react-bootstrap-icons";
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
    setDoc,
    getDocs,
    doc,
    query,
    where,
} from "firebase/firestore";

export let auth = getAuth(app);
let googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account",
});

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

    const collectionRef = collection(database, "users");

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
                });
                setCurrentUser({
                    firstName,
                    lastName,
                    email: registerEmail,
                    uid: user.user.uid,
                });
            } catch (err) {
                setLoginAlert(true);
                setLoginAlertType(err.message);
            }
        } catch (err) {
            setLoginAlert(true);
            setLoginAlertType(err.message);
        }
    };

    const handleSignIn = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            getUserBasicData(user.user);
        } catch (err) {
            setLoginAlert(true);
            setLoginAlertType(err.message);
        }
    };

    const getUserBasicData = async (user) => {
        const q = query(
            collection(database, `users`),
            where("email", "==", user.email)
        );
        const querySnashot = await getDocs(q);
        querySnashot.forEach((doc) => {
            const { firstName, lastName, email } = doc.data();
            setCurrentUser({
                firstName,
                lastName,
                email,
                uid: doc.id,
            });
        });
    };

    const signInWithGoogle = async () => {
        try {
            const user = await signInWithPopup(auth, googleProvider);
            const nameArray = user.user.displayName.split(" ");
            try {
                setDoc(doc(collectionRef, user.user.uid), {
                    firstName: nameArray[0],
                    lastName: nameArray[nameArray.length - 1],
                    email: user.user.email,
                });
                setCurrentUser({
                    firstName: nameArray[0],
                    lastName: nameArray[nameArray.length - 1],
                    email: user.user.email,
                    uid: user.user.uid,
                });
            } catch (err) {
                setLoginAlert(true);
                setLoginAlertType(err.message);
            }
        } catch (err) {
            setLoginAlert(true);
            setLoginAlertType(err.message);
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
                        onClick={() => handleSignIn()}
                    >
                        SIGN IN
                    </button>
                    <button
                        className="confirmButton"
                        onClick={() => signInWithGoogle()}
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
                        onClick={() => handleRegistration()}
                    >
                        REGISTER
                    </button>
                </div>
            )}
        </>
    );
};
