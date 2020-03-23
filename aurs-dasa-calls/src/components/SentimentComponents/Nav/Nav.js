import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';

const styles  = {
    activeLink : {
        backgroundColor : '#363970',
        color : 'white',
        fontWeight : 'bolder'
    },
    main : {
        width : '100%',
        color : 'black',
        fontWeight : 'bolder',
        marginTop : '20px'
    }
}

function NavBar() {
    const [link1, setLink1] = useState(styles.activeLink);
    const [link2, setLink2] = useState({});
    const [link3, setLink3] = useState({});


    const linkHandler = (num) => {
        if (num === 1) {
            setLink1(styles.activeLink)
            setLink2({})
            setLink3({})
        } else if (num === 2) {
            setLink1({})
            setLink2(styles.activeLink)
            setLink3({})
        } else if (num === 3) {
            setLink1({})
            setLink2({})
            setLink3(styles.activeLink)
        }
    }

    return (
            <Nav style = {styles.main} justify variant="tabs" defaultActiveKey="link-4">
                <Nav.Item  >
                    <Nav.Link 
                        onClick = {linkHandler.bind(this,1)} 
                        style = {link1} eventKey="link-1">Check Live Sentiment</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link 
                        onClick = {linkHandler.bind(this,2)} 
                        style = {link2} eventKey="link-2">General Stats</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link 
                        onClick = {linkHandler.bind(this,3)} 
                        style = {link3} eventKey="link-3">Sentiment History</Nav.Link>
                </Nav.Item>

            </Nav>
    )
}

export default NavBar;