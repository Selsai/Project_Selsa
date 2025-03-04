import React from "react";
import { Card, Badge } from "react-bootstrap";
import "./Dish.scss";

function Dish({ name, description, price, image, stock }) {
  return (
    <Card className="dish-card">
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{name}</Card.Title>
        <Card.Text className="flex-grow-1">{description}</Card.Text>
        <div className="mt-auto">
          <p className="price">Prix : {price}€</p>
          {stock > 0 ? (
            <Badge bg="success">En stock : {stock}</Badge>
          ) : (
            <Badge bg="danger">Rupture de stock</Badge>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default Dish;
