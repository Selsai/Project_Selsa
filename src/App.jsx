import { useState } from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Dish from './components/Dish/Dish'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHatCowboy, faPepperHot } from '@fortawesome/free-solid-svg-icons'

// Plats
const dishes = [
  {
    id: 1,
    title: "Tacos à l'unité",
    price: 3,
    img: "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg",
    isNew: true,
    stock: 12
  },
  {
    id: 2,
    title: "Enchiladas",
    price: 12,
    img: "https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg",
    isNew: false,
    stock: 0
  },
  {
    id: 3,
    title: "Mole Poblano",
    price: 15,
    img: "https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg",
    isNew: false,
    stock: 5
  }
]

function App() {
  const [showNewOnly, setShowNewOnly] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const handleShowNewOnly = () => {
    setShowNewOnly(!showNewOnly)
  }

  const addToCart = () => {
    setCartCount(prevCount => prevCount + 1);
  }

  const availableDishes = dishes.filter(dish => dish.stock > 0 && (!showNewOnly || dish.isNew));

  return (
    <>
      <Header cartCount={cartCount} />
      <main>
        <Container className="my-4">
          <Button 
            onClick={handleShowNewOnly} 
            variant={showNewOnly ? 'outline-danger' : 'danger'}
            className="d-flex align-items-center mx-auto px-4 py-2"
          >
            <FontAwesomeIcon icon={showNewOnly ? faPepperHot : faHatCowboy} className="me-2" />
            {showNewOnly ? "Afficher tous les plats" : "Voir les nouveautés"}
          </Button>
        </Container>
        <Container>
          <Row>
            {availableDishes.map(dish => (
              <Col md={4} key={dish.id}>
                <Dish title={dish.title} price={dish.price} img={dish.img} isNew={dish.isNew} addToCart={addToCart} />
              </Col>
            ))}
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
