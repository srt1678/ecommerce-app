import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav} from "react-bootstrap";
import './NavBar.css'

export const NavBar = () => {
    return (
        <>
            <div className="navbar_title_container pt-4">
                <h2>FAKESHOP</h2>
            </div>
            <Navbar variant="light" className='pt-1'>
                <Container className='justify-content-center'>
                    <Nav>
                    <Nav.Link as={Link} to="/" className='category_text pe-3'>HOME</Nav.Link>
                        <Nav.Link as={Link} to="/category/1" className='category_text pe-3'>WOMEN</Nav.Link>
                        <Nav.Link as={Link} to="/category/2" className='category_text pe-3'>MEN</Nav.Link>
                        <Nav.Link as={Link} to="/category/3" className='category_text pe-3'>SHOES</Nav.Link>
                        <Nav.Link as={Link} to="/category/4" className='category_text'>ACCESSORIES</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};
