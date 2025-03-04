import { useState } from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Dish from './components/Dish/Dish'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './App.scss'

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

  const handleShowNewOnly = () => {
    setShowNewOnly(!showNewOnly)
  }

  const filteredDishes = showNewOnly ? dishes.filter(dish => dish.isNew) : dishes.filter(dish => dish.stock > 0);

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Button onClick={handleShowNewOnly} variant="danger" className="mb-3">
            {showNewOnly ? "Nouveautés uniquement" : "Voir les plats disponibles"}
          </Button>
        </Row>
        <Row>
          {filteredDishes.map(dish => (
            <Col md={4} key={dish.id}>
              <Dish title={dish.title} price={dish.price} img={dish.img} isNew={dish.isNew} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default App
