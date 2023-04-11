import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import slider1 from "../img/slider1.jpg";
import slider2 from "../img/slider2.jpg";
import slider3 from "../img/slider3.jpg";
import slider4 from "../img/slider4.jpg";
import slider5 from "../img/slider5.jpg";
import slider6 from "../img/slider6.jpg";
import "./Slider.css";

const imageData = [
    { img: slider1, label: "FAKESHOP COLLECTIONS", labelButton: "WOMEN" },
    { img: slider2, label: "FAKESHOP COLLECTIONS", labelButton: "MEN" },
    { img: slider3, label: "NEW SEASONS", labelButton: "MEN" },
    { img: slider4, label: "NEW SEASONS", labelButton: "WOMEN" },
    { img: slider5, label: "SPECIAL OFFERS", labelButton: "MEN" },
    { img: slider6, label: "SPECIAL OFFERS", labelButton: "WOMEN" },
];

const Slider = () => {
    return (
        <>
            <div style={{ position: "relative" }}>
                <Carousel
                    className="carousal mt-2 mb-5"
                    variant="dark"
                    controls={false}
                    indicators={false}
                    interval={5000}
                >
                    {imageData.map((singleImage) => {
                        return (
                            <Carousel.Item key={singleImage.img}>
                                <div className="carousel_setup">
                                    <img
                                        className="slider_img"
                                        src={singleImage.img}
                                        alt=""
                                    ></img>
                                    <div className="carousel_container">
                                        <div className="carousel_position_text">
                                            {singleImage.label}
                                        </div>
                                        <Button
                                            className="carousel_button mt-2"
                                            variant="outline-light"
                                        >
                                            SHOP {singleImage.labelButton}
                                        </Button>
                                    </div>
                                </div>
                            </Carousel.Item>
                        );
                    })}
                </Carousel>
            </div>
        </>
    );
};

export default Slider;
