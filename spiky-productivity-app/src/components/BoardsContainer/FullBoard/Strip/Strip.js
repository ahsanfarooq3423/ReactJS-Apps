import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTrash } from '@fortawesome/free-solid-svg-icons';
import classes from './Strip.module.css';

const strip = (props) => {
    return(
        <div className = {classes.strip}>
            <div className = {classes.name}>
                <p>{props.name}</p>
            </div>

            <div className = {classes.icon}>
                <FontAwesomeIcon icon = {faStar} style = {{marginTop : '2px'}} />
                <p>Your Person Board</p>
            </div>

            <div className = {classes.delete} onClick = {props.delete}>
                <FontAwesomeIcon icon = {faTrash} style = {{marginTop : '3px'}} />
                <p>Delete this Board</p>
            </div>
        </div>
    )
}

export default strip;