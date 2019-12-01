import React from 'react';
import classes from './PostCard.module.css';

const postcard = () => {
    return (
        <div className = {classes.maincard}>
            <div className = {classes.imgdiv}>
                {/* <img src = "https://images.unsplash.com/photo-1575121147178-4cf23e0421d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"/> */}
            </div>

            <div className = {classes.infodiv}>
                <p className = {classes.title}>The Ultmate Guide to: Zion Nation Park</p>
                <div className = {classes.subinfo}>
                    <p className = {classes.sent}>by</p>
                    <p className = {classes.author}>Ahsan Farooq</p>
                </div>
                
            </div>
            
        </div>
    )
}

export default postcard;