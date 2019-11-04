import React from 'react';
import classes from './Board.module.css';



       
        
const board = (props) => {
    return(
        
        <div
            onClick = {props.click} 
            className = {classes.board} 
            style = {{backgroundImage: "url(" + props.url + ")"}}>
                    <p>{props.name}</p>
            </div>

        // <div className = {classes.board}>
        //     <img src = "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"/>

        // </div>
      

    )
}

export default board;