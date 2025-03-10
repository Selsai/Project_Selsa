import React from 'react';
import logo from "../../assets/img/man-3262834_960_720.webp";
import { Navbar, Container, Nav } from 'react-bootstrap';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../../hooks/useCart';

const Header = () => {
    const { cartCount } = useCart();

    return (
        <header>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">
                        <img className="logo" src={logo} alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Text>
                        <FontAwesomeIcon icon={faUtensils} style={{ marginRight: '5px', color: '#dc3545' }} />
                        Panier : <strong>{cartCount}</strong> article{cartCount > 1 ? 's' : ''}
                    </Navbar.Text>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
    