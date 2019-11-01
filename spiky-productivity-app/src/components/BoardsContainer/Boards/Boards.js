import React from 'react';
import classes from './Boards.module.css';
import Board from './Board/Board';

const board = (props) => {
    return(
        <div>
            <div className = {classes.boards}>

                <Board/>
                <Board/>
                <Board/>
                <Board/>
                <Board/>
                <Board/>
            </div>
        </div>
        
    )
}


export default board;