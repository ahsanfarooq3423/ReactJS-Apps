import React from 'react';
import Aux from '../../../../containers/hoc/Aux/Aux';
import classes from './ButtonBox.module.css';

const buttonbox = (props) => {
    let show = null;
    if (props.auth) {
            show = 
            <Aux>
                 <button 
                    onClick = {() => {
                        let to = "editpost"
                        props.history.push(to)
                    }}
                    className = {classes.edit}>Edit Post</button>
                <button 
                    onClick = {props.delete}
                    className = {classes.delete}  >Delete Post</button>
            </Aux>
        }
    
    
    return(
        <div className = {classes.buttonbox}>
           {show}
        </div>
    )
}


export default buttonbox; 