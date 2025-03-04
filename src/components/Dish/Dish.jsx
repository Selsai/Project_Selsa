import React from 'react';
import './Dish.css';

function Dish({ name, description, price, image, stock }) {
  return (
    <div className="dish">
      <img src={image} alt={name} className="dish-image" />
      <h2>{name}</h2>
      <p>{description}</p>
      <p className="price">Prix : {price}€</p>
      <p className="stock">Stock : {stock}</p>
    </div>
  );
}

export default Dish;
