import React from 'react';
import classes from './Board.module.css';



       
        
const board = (props) => {
    return(

       
<div className = {classes.board} style = {{backgroundImage: "url(" + props.url + ")"}}>
            <p>{props.name}</p>
    </div>

    )
}

export default board;