import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import "./Dish.scss";
import { CartContext } from '../../context/cartContext';
import { useContext } from 'react';

const Dish = ({ title, price, img, isNew }) => {
    const { addToCart } = useContext(CartContext); // Récupération de addToCart via le contexte

    return (
        <Card>
            {isNew && <Badge bg="danger">Nouveau</Badge>}
            <Card.Img src={img} alt={title} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{price}€</Card.Text>
                <Button onClick={addToCart} variant="danger">Ajouter au panier</Button>
            </Card.Body>
        </Card>
    );
};

export default Dish;
