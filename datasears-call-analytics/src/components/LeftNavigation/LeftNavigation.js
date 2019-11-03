import React from 'react';
import classes from './LeftNavigation.module.css';
import NavItem from './NavigationItem/NavigationItem';
import Logo from '../../assets/images/logo.png';
import { faHome, faChartLine } from '@fortawesome/free-solid-svg-icons'; 

const leftnavigation = () => {
    return(
        <div className = {classes.leftnavigation}> 
            <div className = {classes.image}>
                <img src = {Logo}/>
            </div>
            <hr/>
            <NavItem text = "HOME"  icon = {faHome}/>
            <NavItem text = "DASHBOARD" active icon = {faChartLine}/>
        </div>
    )
}

export default leftnavigation;