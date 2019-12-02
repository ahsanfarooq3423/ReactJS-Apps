import React from 'react';
import classes from './TopBox.module.css';


const topbox = () => {
    return(
        <div className = {classes.top}>
            <h1>The Ultmate Guide to: Zion Nation Park</h1>
            <div className = {classes.author}>
                <div className = {classes.profile}></div>
                <div className = {classes.authorName}>Ahsan Farooq</div>
                <div className = {classes.date}> Posted on 22 Jan 2019</div>
            </div>

            <div className = {classes.images}>
                <img className = {classes.img} alt = "motorbike" src = "https://images.unsplash.com/photo-1558981359-219d6364c9c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"/>
            </div>
        </div>
    )
   
}

export default topbox;