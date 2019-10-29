import React from 'react';
import classes from './Toolbar.module.css';
import { FaLeaf } from 'react-icons/fa';
import { IoIosCart } from "react-icons/io";
import {NavLink} from 'react-router-dom';


//the toolbar which contains the nav items
const toolbar = ( props ) => {
    

    return (
        <header className = {classes.header}>

        <NavLink to = '/home' activeStyle = {{color: "black"}}>
        <div className = {classes.icons} onClick = {props.home}>
            <FaLeaf />
        </div>
        </NavLink>


        <NavLink to = '/cart' activeStyle = {{color: "black"}}>
        <div className = {classes.icons} onClick = {props.cart}>
            <IoIosCart />
            <div className = {classes.counter}>
                {props.items}
            </div>
        </div>
        </NavLink>

        </header>
    )
}


export default toolbar;

