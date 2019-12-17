import React from 'react';
import classes from '../CommentBox.module.css';

const comment = () => {
    return(
        <div className={classes.container}>

                <div className = {classes.identity}>
                    <div className = {classes.profile}></div>
                    <div className = {classes.name}>Joshua Megan</div>
                </div>
                
                <div className={classes.dialogbox}>
                    <div className={classes.body}>
                    <span className = {classes.tip}></span>
                    <div className={classes.message}>
                        <span>I just made a comment about this comment box which is purely made from CSS.</span>
                    </div>
                    </div>
                </div>
            </div>
    )
}

export default comment;