import React from "react";
import "./ProductDetail.css";

export const StandardSize = (props) => {
    const standardSizes = ["XS", "S", "M", "L", "XL", "XXL"];
    return (
        <>
        {standardSizes.map((singleSize) => {
            return (
                <button
                    className="sizeButton"
                    key={singleSize}
                    onClick={() =>
                        props.setSelectSize(singleSize)
                    }
                    style={
                        props.selectSize === singleSize
                            ? {
                                  backgroundColor:
                                      "black",
                                  color: "white",
                                  outline:
                                      "solid 1.5px white",
                              }
                            : {
                                  backgroundColor:
                                      "rgb(218, 217, 217)",
                                  border: "solid 1.5px black",
                                  outline:
                                      "solid 1.5px black",
                              }
                    }
                >
                    {singleSize}
                </button>
            );
        })}
        </>
    );
};
