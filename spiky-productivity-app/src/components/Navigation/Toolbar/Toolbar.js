import React from 'react';
import classes from './Toolbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSpider } from '@fortawesome/free-solid-svg-icons';

const toolbar = () => {
    return(
        <div className = {classes.nav}>
            <div className = {classes.home}>
                <FontAwesomeIcon icon = {faHome}  />
            </div>

            <div className = {classes.board}>
                <FontAwesomeIcon icon = {faSpider} className = {classes.spider}  />
                <p>Boards</p>
            </div>

            <div className = {classes.logo}>
                <FontAwesomeIcon icon = {faSpider} className = {classes.spider}  />
                <p>Spiky</p>
            </div>
            
        </div>
    )
}


export default toolbar;