import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Dish from "./components/Dish/Dish";
import tacosImage from "./assets/img/tacos-1613795_960_720.jpg";
import enchiladasImage from "./assets/img/mexican-245240_960_720.jpg";
import moleImage from "./assets/img/mole-5980185_960_720.jpg";
import { Container } from "react-bootstrap";
import "./App.scss";

const dishes = [
  {
    name: "Tacos à l'unité",
    description: "Savourez l'authenticité mexicaine avec notre délicieux tacos à l'unité...",
    price: 3,
    image: tacosImage,
    slug: "tacos-a-l-unite",
    stock: 12,
  },
  {
    name: "Enchiladas",
    description: "Nos enchiladas sont un festin de saveurs, avec des tortillas de maïs...",
    price: 12,
    image: enchiladasImage,
    slug: "enchiladas",
    stock: 0,
  },
  {
    name: "Mole poblano",
    description: "Découvrez la richesse de la cuisine mexicaine avec notre mole poblano...",
    price: 15,
    image: moleImage,
    slug: "mole-poblano",
    stock: 5,
  },
];

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Container>
          <h1 className="text-center mb-5">Nos plats mexicains</h1>
          <div className="dishes-container">
            {dishes.map((dish) => (
              <Dish key={dish.slug} {...dish} />
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
