import React from 'react';
import classes from './TitleInfo.module.css';
const titleinfo = () => {
    return(
        <div>
            <div className = {classes.title}>The Ultmate Guide to: Zion Nation Park </div>
            <div className= {classes.subtitle}>
                    <p className = {classes.sent}>by</p>
                    <p className = {classes.author}>Max Zaminla</p>
            </div>
        </div>
    )
}

export default titleinfo;