import React, { useContext } from "react";
import "./Comparison.css";
import Card from "react-bootstrap/Card";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";

export const Comparison = () => {
    const { comparisonArray } = useContext(AppContext);
    const navigate = useNavigate();
    const handleNav = (productId) => {
        navigate(`/product/${productId}`);
    }

    return (
        <div className="comparisonContainer">
            {comparisonArray.map((product) => {
                return (
                    <div className="cardOverallContainer" key={product.id}>
                        <Card className="comparisonCard" onClick={() => handleNav(product.id)}>
                            <Card.Img variant="top" className='cardImage' src={product.image} />
                            <Card.Body className="comparisonCardBody">
                                <Card.Title style={{height: '3rem'}}>
                                    {product.title}
                                </Card.Title>
                                <hr />
                                <Card.Text>${product.price}</Card.Text>
                                <hr />
                                <Card.Text>{product.color}</Card.Text>
                                <hr />
                                <Card.Text>{product.material}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                );
            })}
        </div>
    );
};
