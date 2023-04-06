import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Search, Person, Heart, Cart2 } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="navbar_title_container">
                <h4>FAKESHOP</h4>
            </div>
            <div className="navbar_container">
                <div className="mid_section">
                    <Link to="/" style={{textDecoration: 'none'}}>
                        <div className="category_text">Women</div>
                    </Link>
                    <Link to="/product" style={{textDecoration: 'none'}}>
                        <div className="category_text">Men</div>
                    </Link>
                    <Link to="/product" style={{textDecoration: 'none'}}>
                        <div className="category_text">Jewelery</div>
                    </Link>
                    <Link to="/product" style={{textDecoration: 'none'}}>
                        <div className="category_text">Electronics</div>
                    </Link>
                </div>
                <div className="last_section">test3</div>
            </div>
        </>
    );
};
