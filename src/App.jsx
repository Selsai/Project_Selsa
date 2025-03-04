import React from 'react';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Dish from "./components/dish/Dish";
import tacosImage from "./assets/tacos-1613795_960_720.jpg";
import enchiladasImage from "./assets/mexican-245240_960_720.jpg";
import moleImage from "./assets/mole-5980185_960_720.jpg";
import "./App.css";

const dishes = [
  {
    name: "Tacos à l'unité",
    description: "Savourez l'authenticité mexicaine avec notre délicieux tacos à l'unité. Garni de viande grillée, de légumes frais et de sauce maison, chaque bouchée vous transporte directement au cœur du Mexique.",
    price: 3,
    image: tacosImage,
    slug: "tacos-a-l-unite",
    stock: 12
  },
  {
    name: "Enchiladas",
    description: "Nos enchiladas sont un festin de saveurs, avec des tortillas de maïs enroulées autour d'une garniture généreuse de viande, de fromage fondu et de sauce tomate épicée. Chaque bouchée est une explosion de goût qui vous fera revenir pour plus.",
    price: 12,
    image: enchiladasImage,
    slug: "enchiladas",
    stock: 0
  },
  {
    name: "Mole poblano",
    description: "Découvrez la richesse de la cuisine mexicaine avec notre mole poblano. Cette sauce complexe et riche en saveurs est préparée avec une combinaison d'épices, de chocolat et de piments, offrant une expérience culinaire unique et exquise.",
    price: 15,
    image: moleImage,
    slug: "mole-poblano",
    stock: 5
  }
];

function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        <h1 style={{ textAlign: 'center' }}>Nos plats mexicains</h1>
        <div className="dishes-container">
          {dishes.map((dish) => (
            <Dish key={dish.slug} {...dish} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
