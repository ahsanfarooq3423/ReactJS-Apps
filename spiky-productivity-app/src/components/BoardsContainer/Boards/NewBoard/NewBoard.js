import React from 'react';
import classes from './NewBoard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faUser } from '@fortawesome/free-solid-svg-icons';


const newboard = (props) => {
    return(
        <div>
<div className = {classes.main}>
        <div>
            <div className = {classes.input} > 
                <input className = {classes.title} type = 'text' placeholder = 'Add Board Title'/>
                <FontAwesomeIcon icon = {faTimes} 
                    style = {{backgroundColor : 'black',
                            color: 'white',
                            fontSize : '14px',
                            marginTop: '10px',
                            alignContent: 'right'}}/>
            </div>

            <div className = {classes.user}>
            <FontAwesomeIcon icon = {faUser} 
                    style = {{backgroundColor : 'black',
                            color: 'white',
                            fontSize : '14px',
                            alignContent: 'right'}}/>
                <p>This is your Personal Board</p>
            </div>
        </div>    
        
        <div>

        <div className = {classes.backgrounds}>
            <div className = {classes.boxes}></div>
            <div className = {classes.boxes}></div>
            <div className = {classes.boxes}></div>
        </div>


        <div className = {classes.backgrounds}>
            <div className = {classes.boxes}></div>
            <div className = {classes.boxes}></div>
            <div className = {classes.boxes}></div>
        </div>

        <div className = {classes.backgrounds}>
            <div className = {classes.boxes}></div>
            <div className = {classes.boxes}></div>
            <div className = {classes.boxes}
                 style = {{backgroundColor : 'gray'}}><span>...</span></div>
        </div>    
        </div>

        
        
        </div>

        
        <button>Create Board</button>

        </div>

        
    )
   
}

export default newboard;