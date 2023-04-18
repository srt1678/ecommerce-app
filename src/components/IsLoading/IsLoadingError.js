import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

export const IsLoading = () => {
    return (
        <div
            className="my-5"
            style={{ display: "flex", justifyContent: "center" }}
        >
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    );
};

export const ErrorMessage = () => {
    return (
        <Alert variant='danger'>Something went wrong! Please try again!</Alert>
    );
};
