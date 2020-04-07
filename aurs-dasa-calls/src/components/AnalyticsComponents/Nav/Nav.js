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
    let to;
    let path = props.location.pathname;
    useEffect(() => {
        if (path === '/dashboard/analytics/freq') {
            setLink1(styles.activeLink)
            setLink2({})
        }
        else if (path === '/dashboard/analytics/ngram') {
            setLink2(styles.activeLink)
            setLink1({})
        }
    }, [props.location.pathname])

    const linkHandler = (path) => {
        if (path === '/dashboard/analytics/freq') {
            setLink1(styles.activeLink)
            setLink2({})
            to = "/dashboard/analytics/freq"
            props.history.push(to)
        } else if (path === '/dashboard/analytics/ngram') {
            setLink1({})
            setLink2(styles.activeLink)
            to = "/dashboard/analytics/ngram"
            props.history.push(to)
        } 
    }

    return (
        <Nav style={styles.main} justify variant="tabs" defaultActiveKey="link-4">
            <Nav.Item  >
                <Nav.Link
                    onClick={linkHandler.bind(this, '/dashboard/analytics/freq')}
                    style={link1} eventKey="link-1">Most Occuring Words (Frequency)</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                    onClick={linkHandler.bind(this, '/dashboard/analytics/ngram')}
                    style={link2} eventKey="link-2">N- Gram Model </Nav.Link>
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