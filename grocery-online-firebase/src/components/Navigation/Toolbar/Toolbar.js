import React from 'react';
import classes from './Toolbar.module.css';
import { FaLeaf } from 'react-icons/fa';
import { IoIosCart } from "react-icons/io";

//the toolbar which contains the nav items
const toolbar = ( props ) => {
    

    return (
        <header className = {classes.header}>

        
        <div className = {classes.icons} onClick = {props.home}>
            <FaLeaf />
        </div>

        <div className = {classes.icons} onClick = {props.cart}>
            <IoIosCart />
            <div className = {classes.counter}>
                {props.items}
            </div>
        </div>

        </header>
    )
}


export default toolbar;

