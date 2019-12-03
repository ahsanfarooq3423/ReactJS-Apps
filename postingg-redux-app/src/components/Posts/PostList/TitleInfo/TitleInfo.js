import React from 'react';
import classes from './TitleInfo.module.css';
const titleinfo = (props) => {
    return(
        <div>
            <div className = {classes.title}>{props.title} </div>
            <div className= {classes.subtitle}>
                    <p className = {classes.sent}>by</p>
                    <p className = {classes.author}>{props.author}</p>
            </div>
        </div>
    )
}

export default titleinfo;