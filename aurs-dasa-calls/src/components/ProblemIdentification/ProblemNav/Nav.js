import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import * as actions from '../../../store/actions/index';


const styles = {
    activeLink: {
        backgroundColor: '#363970',
        color: 'white'
    },
    main: {
        width: '100%',
        color: 'black',
        marginTop: '20px'
    }
}

function NavBar(props) {
    const [link1, setLink1] = useState({});
    const [link2, setLink2] = useState({});
    const [link3, setLink3] = useState({});
    const [link4, setLink4] = useState({});
    let to;
    // let path = props.location.pathname;
    let path = '/problem/live';
    useEffect(() => {
        props.onProblemHistory()
        if (path === '/problem/live') {
            setLink1(styles.activeLink)
            setLink2({})
            setLink3({})
            setLink4({})
        }
        else if (path === '/problem/info') {
            setLink1({})
            setLink2(styles.activeLink)
            setLink3({})
            setLink4({})
        }
        else if (path === '/problem/stats') {
            setLink1({})
            setLink2({})
            setLink3(styles.activeLink)
            setLink4({})
        }
        else if (path === '/problem/history') {
            setLink1({})
            setLink2({})
            setLink3({})
            setLink4(styles.activeLink)
        }
    }, [path])

    const linkHandler = (path) => {
        if (path === '/problem/live') {
            setLink1(styles.activeLink)
            setLink2({})
            setLink3({})
            setLink4({})
            to = "/problem/live"
            props.history.push(to)
        } else if (path === '/problem/info') {
            setLink1({})
            setLink2(styles.activeLink)
            setLink3({})
            setLink4({})
            to = "/problem/info"
            props.history.push(to)
        } else if (path === '/problem/stats') {
            setLink1({})
            setLink2({})
            setLink3(styles.activeLink)
            setLink4({})
            to = "/problem/stats"
            props.history.push(to)
        }
        else if (path === '/problem/history') {
            setLink1({})
            setLink2({})
            setLink3({})
            setLink4(styles.activeLink)
            props.onProblemHistory()
            to = "/problem/history"
            props.history.push(to)
        }
    }

    return (
        <Nav style={styles.main} justify variant="tabs" defaultActiveKey="link-4">
            <Nav.Item  >
                <Nav.Link
                    onClick={linkHandler.bind(this, '/problem/live')}
                    style={link1} eventKey="link-1">Identify Problem in the Call</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                    onClick={linkHandler.bind(this, '/problem/info')}
                    style={link2} eventKey="link-2">Problems Info</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                    onClick={linkHandler.bind(this, '/problem/stats')}
                    style={link3} eventKey="link-3">Problems Stats</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link
                    onClick={linkHandler.bind(this, '/problem/history')}
                    style={link4} eventKey="link-w">Problems History</Nav.Link>
            </Nav.Item>

        </Nav>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onProblemHistory: () => dispatch(actions.getProblemHistory())
    }
}


export default withRouter(connect(null, mapDispatchToProps)(NavBar));