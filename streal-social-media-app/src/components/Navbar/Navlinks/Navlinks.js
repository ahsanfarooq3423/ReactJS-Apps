import React from 'react';
import classes from './Navlinks.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPollH, faPlus, faUserPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const navlinks = props => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand className={classes.navbrand} href="#home">
                <Link to="/" class={classes.link}><FontAwesomeIcon icon={faPollH} /> Streal</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link onClick={props.showModal} ><FontAwesomeIcon icon={faPlus} />New Screen</Nav.Link>
                    <NavDropdown title="Notifications" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link><Link to="/login" class={classes.link}><FontAwesomeIcon icon={faUser} />Log In</Link></Nav.Link>
                    <Nav.Link eventKey={2}><Link to="/signup" class={classes.link}><FontAwesomeIcon icon={faUserPlus} />  Sign Up </Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default navlinks;