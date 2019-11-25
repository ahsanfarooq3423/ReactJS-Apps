import React from 'react';
import classes from './Note.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Aux from '../../../containers/hoc/Aux/Aux';


const note = (props) => {

    // a single note

    return(
        <div className = {classes.main}>
        <div 
            onClick = {props.deleteIndex}
            className = {classes.delete}>
            <FontAwesomeIcon icon={faTrashAlt} /></div>
        <div 
            onClick = {props.getIndex}
            className = {classes.contain}>
        
        <h4>{props.title}</h4>
             <p>{props.text}</p>
        </div>
        </div>
    )
}

export default note;