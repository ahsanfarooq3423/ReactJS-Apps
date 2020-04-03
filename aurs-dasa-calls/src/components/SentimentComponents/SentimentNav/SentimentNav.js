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
    let to;
    let path = props.location.pathname;
    useEffect(() => {
        if (path === '/sentiment/live') {
            setLink1(styles.activeLink)
            setLink2({})
            setLink3({})
        }
        else if (path === '/sentiment/stats') {
            setLink2(styles.activeLink)
            setLink1({})
            setLink3({})
        }
        else if (path === '/sentiment/history') {
            setLink1({})
            setLink2({})
            setLink3(styles.activeLink)
        }
    }, [props.location.pathname])

    const linkHandler = (path) => {
        if (path === '/sentiment/live') {
            setLink1(styles.activeLink)
            setLink2({})
            setLink3({})
            to = "/sentiment/live"
            props.history.push(to)
        } else if (path === '/sentiment/stats') {
            setLink1({})
            setLink2(styles.activeLink)
            setLink3({})
            to = "/sentiment/stats"
            props.history.push(to)
        } else if (path === '/sentiment/history') {
            setLink1({})
            setLink2({})
            setLink3(styles.activeLink)
            props.onSentimentHistory()
            to = "/sentiment/history"
            props.history.push(to)
        }
    }

    return (
        <Nav style={styles.main} justify variant="tabs" defaultActiveKey="link-4">
            <Nav.Item  >
                <Nav.Link
                    onClick={linkHandler.bind(this, '/sentiment/live')}
                    style={link1} eventKey="link-1">Check Live Sentiment</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                    onClick={linkHandler.bind(this, '/sentiment/stats')}
                    style={link2} eventKey="link-2">General Stats</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                    onClick={linkHandler.bind(this, '/sentiment/history')}
                    style={link3} eventKey="link-3">Sentiment History</Nav.Link>
            </Nav.Item>

        </Nav>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onSentimentHistory: () => dispatch(actions.getSentimentHistory())
    }
}

export default withRouter(connect(null, mapDispatchToProps)(NavBar));