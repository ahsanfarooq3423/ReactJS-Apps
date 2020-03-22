import React from 'react';
import classes from './Subwork.module.css';

const step = props => {
    let content = (
        <div className={classes.main}>
            <div className={classes.text}>
                <h1>{props.head}</h1>
                <p className = {classes.content}>{props.content}</p></div>

            <img className={classes.image} src={props.image} alt="calls" />
        </div>
    )

    if (props.image_first) {
        content = (
            <div className={classes.main}>
                <img className={classes.image} src={props.image} alt="calls" />
                <div className={classes.text}>
                    <h1>{props.head}</h1>
                    <p className = {classes.content}>{props.content}</p></div>
            </div>
        )
    }
    return (
        <React.Fragment>
            {content}
        </React.Fragment>
    )
}

export default step;