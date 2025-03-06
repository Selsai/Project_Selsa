import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import "./Dish.scss";
import { useCart } from '../../hooks/useCart';

const Dish = ({ title, price, img, isNew }) => {
    const { addToCart, removeFromCart } = useCart();

    return (
        <Card>
            {isNew && <Badge bg="danger">Nouveau</Badge>}
            <Card.Img src={img} alt={title} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{price}€</Card.Text>
                <div className="d-flex gap-2">
                    <Button onClick={addToCart} variant="danger" className="w-100">Ajouter au panier</Button>
                    <Button onClick={removeFromCart} variant="outline-danger" className="w-100">Retirer du panier</Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Dish;
