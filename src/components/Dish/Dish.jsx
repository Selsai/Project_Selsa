import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import "./Dish.scss";
import { CartContext } from '../../context/cartContext';
import { useContext } from 'react';

const Dish = ({ title, price, img, isNew }) => {
    const { dispatch } = useContext(CartContext);

    return (
        <Card>
            {isNew && <Badge bg="danger">Nouveau</Badge>}
            <Card.Img src={img} alt={title} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{price}€</Card.Text>
                <div className="d-flex gap-2">
                    <Button onClick={() => dispatch({ type: 'increment' })} variant="danger" className="w-100">Ajouter au panier</Button>
                    <Button onClick={() => dispatch({ type: 'decrement' })} variant="outline-danger" className="w-100">Retirer du panier</Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Dish;
