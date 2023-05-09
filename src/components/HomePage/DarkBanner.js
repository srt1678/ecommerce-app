import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./DarkBanner.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import darkBannerM1 from "../img/darkBannerM1.jpg";
import darkBannerM2 from "../img/darkBannerM2.jpg";
import darkBannerM3 from "../img/darkBannerM3.jpg";
import darkBannerW1 from "../img/darkBannerW1.jpg";
import darkBannerW2 from "../img/darkBannerW2.jpg";
import darkBannerW3 from "../img/darkBannerW3.jpg";

const photoOrderM = [darkBannerM1, darkBannerM2, darkBannerM3];
const photoOrderW = [darkBannerW1, darkBannerW2, darkBannerW3];

export const DarkBanner = () => {
    const [currentIndexM, setCurrentIndexM] = useState(0);
    const [currentIndexW, setCurrentIndexW] = useState(0);
    const navigate = useNavigate();
    const handleNav = (num) => {
        navigate(`/category/${num}`);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentIndexM + 1 < photoOrderM.length) {
                setCurrentIndexM(currentIndexM + 1);
            } else {
                setCurrentIndexM(0);
            }
        }, 4000);
        return () => clearInterval(interval);
    });

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentIndexW + 1 < photoOrderW.length) {
                setCurrentIndexW(currentIndexW + 1);
            } else {
                setCurrentIndexW(0);
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndexW]);

    return (
        <Container fluid className="darkBannerContainer">
            <div className="darkBannerTitleContainer">
                <h3>BEST FAKESHOP COLLECTIONS</h3>
                <div className="darkBannerButtonLine">
                    <div className="buttonDiv">
                        <button
                            className="darkBannerButton"
                            onClick={() => handleNav(2)}
                        >
                            SHOP MEN'S
                        </button>
                    </div>
                    <div className="buttonDiv">
                        <button
                            className="darkBannerButton"
                            onClick={() => handleNav(1)}
                        >
                            SHOP WOMEN'S
                        </button>
                    </div>
                </div>
            </div>
            <Row>
                <Col md={6} className="darkBannerColumn">
                    <img
                        className="darkBanner"
                        alt=""
                        src={photoOrderM[currentIndexM]}
                    />
                </Col>
                <Col md={6} className="darkBannerColumn">
                    <img
                        className="darkBanner"
                        alt=""
                        src={photoOrderW[currentIndexW]}
                    />
                </Col>
            </Row>
        </Container>
    );
};
