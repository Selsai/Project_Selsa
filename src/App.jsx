// App.jsx
import React from "react";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <section className="hero">
          <div className="hero-content">
            <h1>¡Bienvenidos a México! 🇲🇽</h1>
            <p className="subtitle">Découvrez la magie, les couleurs et les saveurs du Mexique</p>
          </div>
        </section>
        
        <section className="features">
          <div className="feature">
            <h2>Culture riche 🎭</h2>
            <p>Explorez l'histoire fascinante et les traditions uniques du Mexique.</p>
          </div>
          <div className="feature">
            <h2>Cuisine délicieuse 🌮</h2>
            <p>Savourez les plats emblématiques et les saveurs épicées de la gastronomie mexicaine.</p>
          </div>
          <div className="feature">
            <h2>Paysages à couper le souffle 🏜️</h2>
            <p>Des plages paradisiaques aux ruines mayas, découvrez la beauté naturelle du Mexique.</p>
          </div>
        </section>
        
        <section className="cta">
          <h2>Prêt pour l'aventure ?</h2>
          <button className="cta-button">Explorez maintenant !</button>
        </section>
      </main>
      
      <footer className="footer">
        <p>&copy; 2025 ¡Viva México! Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default App;
