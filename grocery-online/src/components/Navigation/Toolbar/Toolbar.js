import React from 'react';
import classes from './Toolbar.module.css';
import { FaLeaf } from 'react-icons/fa';
import { IoIosCart } from "react-icons/io";


const toolbar = ( props ) => {
  
    

   
    return (
        <header className = {classes.header}>

        
        <div className = {classes.icons}>
            <FaLeaf />
        </div>

        <div className = {classes.icons}>
            <IoIosCart/>
            
        </div>

        </header>
    )
}


export default toolbar;

