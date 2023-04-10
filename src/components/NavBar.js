import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Search, Person, Heart, Cart2 } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="navbar_title_container mt-4">
                <h4>FAKESHOP</h4>
            </div>
            <Navbar variant="light" className='pt-1'>
                <Container className="justify-content-center">
                    <Nav>
                    <Nav.Link as={Link} to="/" className='category_text pe-3'>Home</Nav.Link>
                        <Nav.Link as={Link} to="/" className='category_text pe-3'>Women</Nav.Link>
                        <Nav.Link as={Link} to="/product" className='category_text pe-3'>Men</Nav.Link>
                        <Nav.Link as={Link} to="/product" className='category_text pe-3'>Jewelery</Nav.Link>
                        <Nav.Link as={Link} to="/" className='category_text'>Electronics</Nav.Link>
                        
                    </Nav>
                </Container>
            </Navbar>
            {/*
            <div className="navbar_container">
                <div className='left_section'></div>
                <div className="mid_section">
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <div className="category_text">Women</div>
                    </Link>
                    <Link to="/product" style={{ textDecoration: "none" }}>
                        <div className="category_text">Men</div>
                    </Link>
                    <Link to="/product" style={{ textDecoration: "none" }}>
                        <div className="category_text">Jewelery</div>
                    </Link>
                    <Link to="/product" style={{ textDecoration: "none" }}>
                        <div className="category_text">Electronics</div>
                    </Link>
                </div>
                <div className="right_section">
                    <Search className="navbar_icon" size={23} />
                    <Person className="navbar_icon" size={25} />
                    <Heart className="navbar_icon" size={23} />
                    <Cart2 className="navbar_icon" size={25} />
                    
                </div>
            </div>
             */}
        </>
    );
};
