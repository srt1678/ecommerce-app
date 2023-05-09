import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";
import { submitContact } from "../../firebase/FirebaseFunctions";

export const Contact = () => {
    const [contactInfo, setContactInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleNav = () => {
        navigate(`/`);
    };

    const handleChange = (event) => {
        setContactInfo({
            ...contactInfo,
            [event.target.name]: event.target.value,
        });
    };

    const handlePhoneNumber = (event) => {
        const formatPhoneNumber = formatNumber(event.target.value);
        setContactInfo({
            ...contactInfo,
            [event.target.name]: formatPhoneNumber,
        });
    };

    const formatNumber = (value) => {
        if (!value) return value;
        const phoneNum = value.replace(/[^\d]/g, "");
        const phoneNumLength = phoneNum.length;
        if (phoneNumLength < 4) return phoneNum;
        if (phoneNumLength < 7) {
            return `(${phoneNum.slice(0, 3)}) ${phoneNum.slice(3)}`;
        }
        return `(${phoneNum.slice(0, 3)})-${phoneNum.slice(
            3,
            6
        )}-${phoneNum.slice(6, 10)}`;
    };

    const handleSubmit = () => {
        submitContact(contactInfo);
        setIsSubmitted(true);
    };

    return (
        <>
            <div className="contactContainer">
                {isSubmitted ? (
                    <div className="submitFormContainer">
                        <h4>SUBMITTED!</h4>
                        <h4>Thank you! We have received your feedback!</h4>
                        <button
                            className="returnHomeButton"
                            onClick={() => handleNav()}
                        >
                            Return Home
                        </button>
                    </div>
                ) : (
                    <div className="contactFormContainer">
                        <div className="contactFirstLine">
                            <input
                                className="contactFirstNameInput"
                                type="text"
                                placeholder="First Name"
                                name="firstName"
                                value={contactInfo.firstName}
                                onChange={(e) => handleChange(e)}
                                required
                            ></input>
                            <input
                                className="contactLastNameInput"
                                type="text"
                                placeholder="Last Name"
                                name="lastName"
                                value={contactInfo.lastName}
                                onChange={(e) => handleChange(e)}
                                required
                            ></input>
                        </div>
                        <div className="contactSecondLine">
                            <input
                                className="contactEmailInput"
                                type="text"
                                placeholder="Email"
                                value={contactInfo.email}
                                name="email"
                                onChange={(e) => handleChange(e)}
                                required
                            ></input>
                            <input
                                className="contactPhoneNumInput"
                                type="text"
                                placeholder="Phone Number"
                                value={contactInfo.phoneNumber}
                                name="phoneNumber"
                                onChange={(e) => handlePhoneNumber(e)}
                                required
                            ></input>
                        </div>
                        <div className="contactParagraphContainer">
                            <textarea
                                className="contactArea"
                                placeholder="Message"
                                value={contactInfo.message}
                                name="message"
                                onChange={(e) => handleChange(e)}
                                required
                            ></textarea>
                        </div>
                        <button
                            className="submitButton"
                            onClick={() => handleSubmit()}
                        >
                            Submit
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};
