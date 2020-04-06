import React from 'react';
import classes from './ProblemClass.module.css';

const ProblemClass = (props) => {
    return (
        <div className={classes.Toast}>
            <main className={classes.Toast__message}>
                <header className={classes.Toast__message_category}>{props.category}</header>
                <p className={classes.Toast__message_text}>{props.message}</p>
            </main>
        </div>
    );
}



export default ProblemClass;

