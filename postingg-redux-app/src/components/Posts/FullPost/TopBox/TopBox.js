import React from 'react';
import classes from './TopBox.module.css';


const topbox = (props) => {

    return(

        <div className = {classes.top}>
            <h1>{props.title}</h1>
            <div className = {classes.author}>
                <div className = {classes.profile}></div>
                <div className = {classes.authorName}>{props.author}</div>
                <div className = {classes.date}>Posted on {props.timeStamp}</div>
            </div>

            <div className = {classes.images}>
                <img className = {classes.img} alt = "motorbike" src = {props.src}/>
            </div>
        </div>
    )
   
}

export default topbox;