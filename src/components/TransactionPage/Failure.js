import React from "react";
import Alert from "react-bootstrap/Alert";

export const Failure = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                height: "10rem",
                alignItems: "center",
            }}
        >
            <div>
                <Alert variant="danger">
                    Something went wrong! Please return to Home Page and try
                    again!
                </Alert>
            </div>
        </div>
    );
};
