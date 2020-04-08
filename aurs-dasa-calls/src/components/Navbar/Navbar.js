import React, {  useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { withRouter } from 'react-router';

const Navigation = (props) => {
    const [fixedTop, setFixTop] = useState('');
    const [active, setActive] = useState([null, null]);

    let path = props.history.location.pathname;


    useEffect(() => {
        let path_ar = props.history.location.pathname.split('/');

        if (path_ar[1] === 'home') {
            setFixTop('top')
            setActive([true, false])
        } else if (path_ar[1] === 'dashboard') {
            setFixTop('')
            setActive([false, true])
        }
    }, [fixedTop, path])

    return (
        <Navbar
            fixed = {fixedTop} 
            style={{ backgroundColor: '#e5ff00', height: '50px  ' }} bg = 'danger' variant="dark" expand="lg">
            <Navbar.Brand href="#">AUSR - DASA</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/home" active = {active[0]}>Home</Nav.Link>
                    <Nav.Link href="/dashboard/speech/live" active = {active[1]}>Dashboard</Nav.Link>
                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        )

}

export default withRouter(Navigation);