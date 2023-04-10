import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import slider1 from "../img/slider1.jpg";
import slider2 from "../img/slider2.jpg";
import slider3 from "../img/slider3.jpg";
import slider4 from "../img/slider4.jpg";
import slider5 from "../img/slider5.jpg";
import slider6 from "../img/slider6.jpg";

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
                    <Carousel.Item>
                        <img className="slider_img" src={slider1} alt=""></img>
                        <div
                            className="carousel_position_text"
                            style={{ top: "25rem", left: "3rem" }}
                        >
                            FAKESHOP COLLECTIONS
                        </div>
                        <Button
                            className="carousel_button"
                            variant="outline-light"
                            style={{ top: "29rem", left: "11rem" }}
                        >
                            SHOP WOMEN
                        </Button>{" "}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="slider_img" src={slider2} alt=""></img>
                        <div
                            className="carousel_position_text"
                            style={{ top: "20rem", left: "3rem" }}
                        >
                            FAKESHOP COLLECTIONS
                        </div>
                        <Button
                            className="carousel_button"
                            variant="outline-light"
                            style={{ top: "24rem", left: "12rem" }}
                        >
                            SHOP MEN
                        </Button>{" "}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="slider_img" src={slider4} alt=""></img>
                        <div
                            className="carousel_position_text"
                            style={{ top: "7rem", left: "3rem" }}
                        >
                            FAKESHOP COLLECTIONS
                        </div>
                        <Button
                            className="carousel_button"
                            variant="outline-light"
                            style={{ top: "11rem", left: "11rem" }}
                        >
                            SHOP WOMEN
                        </Button>{" "}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="slider_img" src={slider3} alt=""></img>
                        <div
                            className="carousel_position_text"
                            style={{ top: "27rem", right: "3rem" }}
                        >
                            FAKESHOP COLLECTIONS
                        </div>
                        <Button
                            className="carousel_button"
                            variant="outline-light"
                            style={{ top: "31rem", right: "12rem" }}
                        >
                            SHOP MEN
                        </Button>{" "}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="slider_img" src={slider5} alt=""></img>
                        <div
                            className="carousel_position_text"
                            style={{ top: "10rem", left: "3rem" }}
                        >
                            FAKESHOP COLLECTIONS
                        </div>
                        <Button
                            className="carousel_button"
                            variant="outline-light"
                            style={{ top: "14rem", left: "12rem" }}
                        >
                            SHOP MEN
                        </Button>{" "}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="slider_img" src={slider6} alt=""></img>
                        <div
                            className="carousel_position_text"
                            style={{ top: "20rem", left: "3rem" }}
                        >
                            FAKESHOP COLLECTIONS
                        </div>
                        <Button
                            className="carousel_button"
                            variant="outline-light"
                            style={{ top: "24rem", left: "11rem" }}
                        >
                            SHOP WOMEN
                        </Button>{" "}
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
};

export default Slider;
