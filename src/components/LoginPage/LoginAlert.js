import React, { useContext } from "react";
import Alert from "react-bootstrap/Alert";
import { AppContext } from "../../App";

export const LoginAlert = () => {
    const { setLoginAlert, loginAlertType } = useContext(AppContext);
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Alert
                style={{ width: "60%", paddingLeft: "3rem" }}
                variant="danger"
                onClose={() => setLoginAlert(false)}
                dismissible
            >
                <Alert.Heading style={{ backgroundColor: "rgb(248,215,218)" }}>
                    You got an error!
                </Alert.Heading>
                <h5
                    style={{
                        color: "black",
                        backgroundColor: "rgb(248,215,218)",
                    }}
                >
                    {loginAlertType}
                </h5>
            </Alert>
        </div>
    );
};
