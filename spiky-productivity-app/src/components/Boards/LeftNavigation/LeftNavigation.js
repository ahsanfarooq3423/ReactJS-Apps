import React from 'react';
import NavigationItem from './NavationItem/NavigationItem';
import classes from './LeftNavigation.module.css';
import { faHome, faThList } from '@fortawesome/free-solid-svg-icons';


const leftnavigation = (props) => {
    return(
        <div className = {classes.leftnavigation} >
            <NavigationItem icon =  {faThList} class = 'active' text = "Boards" />
            <NavigationItem icon = {faHome}  text = "Home" />
        </div>
    )
}


export default leftnavigation;