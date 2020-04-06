import React from 'react';
import classes from './ProblemResult.module.css';

import ProblemClass from '../ProblemClasses/ProblemClass';



const ProblemResult = (props) => {
    return(
     <div className = {classes.main}>
         <h4>The resulting problem of the given call is:</h4>
         <ProblemClass {...props} message = {props.dataset}/>
     </div>   
    )
}

export default ProblemResult;