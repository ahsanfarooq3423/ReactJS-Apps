import React from 'react';
import classes from './FormAuth.module.css';

const formerrors = (props) => {
    return(
        <div className = {classes.invalid}>
            {Object.keys(props.formErrors).map((fieldName, i) => {
                if (props.formErrors[fieldName].length > 0){
                    return (
                    <p key = {i}>{fieldName} {props.formErrors[fieldName]}</p>
                    )
                } else {
                    return '';
                }
            })}
        </div>
    )
}

export default formerrors;