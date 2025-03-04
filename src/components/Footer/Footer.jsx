import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4}>
            <h5>À propos</h5>
            <p>Mexican Food vous propose une expérience culinaire authentique et savoureuse.</p>
          </Col>
          <Col md={4}>
            <h5>Liens rapides</h5>
            <ul className="list-unstyled">
              <li><a href="/">Accueil</a></li>
              <li><a href="/menu">Menu</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <p>Email : info@mexicanfood.com</p>
            <p>Téléphone : 01 23 45 67 89</p>
          </Col>
        </Row>
        <hr />
        <p className="text-center">&copy; {new Date().getFullYear()} Mexican Food. Tous droits réservés.</p>
      </Container>
    </footer>
  );
}

export default Footer;
