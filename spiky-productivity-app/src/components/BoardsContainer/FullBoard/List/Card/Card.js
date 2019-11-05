import React from 'react';
import classes from './Card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

const card = (props) => {
    return(
        <div className = {classes.card}>
            <p>{props.card}</p>
            <div className = {classes.icon}>
                <FontAwesomeIcon icon = {faPencilAlt}  />
            </div>
            
            
        </div>
    )
}

export default card;