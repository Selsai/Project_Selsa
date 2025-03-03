import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        <h1 style={{ textAlign: 'center' }}>Bienvenue sur mon site</h1>
      </main>
      <Footer />
    </>
  );
}

export default App;
