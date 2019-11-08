import React from 'react';
import classes from './Toolbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSpider } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';


const toolbar = (props) => {

    let styles = [];
    styles.push(classes.nav);

    if (props.blur) {
        styles.push(classes.blur)
    }

    return(
        <div className = {styles.join(" ")}>
            <Link to = "/" onClick = {props.homestate} >
            <div className = {classes.home}>
                <FontAwesomeIcon icon = {faHome}  />
            </div>
            </Link>

            <Link to = "/" onClick = {props.homestate}  style={{ textDecoration: 'none' }}>
            <div className = {classes.board}>
                <FontAwesomeIcon icon = {faSpider} className = {classes.spider}  />
                <p>Boards</p>
            </div>
            </Link>


            <div className = {classes.logo}>
                <FontAwesomeIcon icon = {faSpider} className = {classes.spider}  />
                <p>Spiky</p>
            </div>
            
        </div>
    )
}


export default toolbar;