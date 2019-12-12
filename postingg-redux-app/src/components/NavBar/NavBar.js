import React from 'react';
import classes from './NavBar.module.css';

const navbar = () => {
    return(
    <div className  = {classes.mainnav}>

        {/* The toggle hamburger for smaller screens */}
        <nav role={classes.navigation}>
        <div className={classes.menuToggle}>
        
            <input type="checkbox" />
            
        
            <span></span>
            <span></span>
            <span></span>
            
            <ul className={classes.menu}>
            <p className = {classes.brandtoggle}>Posting App</p>
            <a href="#"><li>Home</li></a>
            <a href="#"><li>All Posts</li></a>
            <a href="#"><li>Login</li></a>
            <a href="#"><li>Sign Up</li></a>
           
            </ul>
        </div>
        </nav>




        <div className = {classes.leftnav}>
            <p className = {classes.brand}>Posting App</p>
            <div className = {classes.leftlinks}>
                <p>Home</p>
                <p>All Posts</p>
            </div>
            
        </div>
       <div className = {classes.rightnav}>
            <p>Login</p>
            <p>Sign Up</p>
        </div>
    </div>
    )
    
}

export default navbar;
