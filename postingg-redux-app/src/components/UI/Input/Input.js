import React from 'react';
import classes from './Input.module.css';

const input = (props) => {
    let inputElement = null;
    switch(props.elementType){
        case ('input'):
            inputElement = <input
                    onChange = {props.changed}  
                    className = {classes.inputElement}
                    {...props.elementConfig} 
                    value = {props.value}/>
            break;

        case ('textarea'):
            inputElement = <textarea
                    onChange = {props.changed} 
                    className = {classes.inputElement} 
                    {...props.elementConfig} 
                    value = {props.value}/>

        default :
            inputElement = <input
                    onChange = {props.changed} 
                    className = {classes.inputElement} 
                    {...props.elementConfig} 
                    value = {props.value}/>
        }
        

    return(
        <div className = {classes.input}>
            <label className = {classes.label}>{props.label}</label>
            {inputElement}
        </div>
        
    )
}

export default input;

