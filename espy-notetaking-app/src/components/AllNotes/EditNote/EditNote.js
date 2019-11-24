import React from 'react';
import classes from './EditNote.module.css';


const editnote = (props) => {
    return(
        <div className = {classes.main}>
            <input className = {classes.title} value = {props.input}/>
            <textarea className = {classes.note} value = {props.content} />

            <div className = {classes.buttons}>
                        <button 
                            className = {classes.cancel}>Cancel</button>
                        <button 
                            className = {classes.done}>Done</button>
            </div>

        </div>
    )
}

export default editnote;