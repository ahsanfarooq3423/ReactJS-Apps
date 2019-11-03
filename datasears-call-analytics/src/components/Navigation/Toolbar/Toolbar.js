import React from 'react';
import classes from './Toolbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChartBar } from '@fortawesome/free-solid-svg-icons';

const toolbar = () => {
    return(
        <div className = {classes.nav}>
            <div className = {classes.home}>
                <FontAwesomeIcon icon = {faHome}  />
            </div>

            <div className = {classes.board}>
                <FontAwesomeIcon icon = {faChartBar} className = {classes.chart}  />
                <p>Dashboard</p>
            </div>

            <div className = {classes.logo}>
                <FontAwesomeIcon icon = {faChartBar} className = {classes.chart}  />
                <p>Datasears</p>
            </div>
            
        </div>
    )
}


export default toolbar;