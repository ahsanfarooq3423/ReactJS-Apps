import React from 'react';
import classes from './ProblemClass.module.css';
import ProblemClass from './ProblemClass';


const ProblemContainer = (props) => {
    return (
        <React.Fragment>
            <h4>Possible Customer Problems in TPL Tracker Data Set</h4>
            <div className={classes.toasts}>
                {props.problemState.problemClasses.map((toast, i) => (
                    <ProblemClass category={toast.category} key={i} message={props.dataset} />
                ))}
            </div>
        </React.Fragment>
    )
}

export default ProblemContainer;