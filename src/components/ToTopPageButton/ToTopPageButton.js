import React from "react";
import "./ToTopPageButton.css";
import { ArrowUp } from "react-bootstrap-icons";

export const ToTopPageButton = () => {
    const handleScrolling = () => {
        window.scroll(0, 0);
    };

    return (
        <div>
            <button className="topButton" onClick={() => handleScrolling()}>
                <ArrowUp className="topIcon" />
            </button>
        </div>
    );
};
