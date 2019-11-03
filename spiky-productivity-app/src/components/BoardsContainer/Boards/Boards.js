import React from 'react';
import classes from './Boards.module.css';
import Board from './Board/Board';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons';
import {NavLink} from 'react-router-dom';

const boards = (props) => {
    
    const boards = [];

    for (let key in props.boards) {
        let name = props.boards[key].name;
        let url = props.boards[key].img;
        boards.push({name,url})
    }
    let showBoards = boards.map((board, index) => {
        return <Board
            click = {() => props.click(board)} 
            key = {index} 
            name = {board.name} 
            url = {board.url} />
    })

    return(
        <div className = {classes.boardcontainer}>
            <h4> <FontAwesomeIcon icon = {faStar} /> Your Personal Boards</h4>
            <div className = {classes.boards}>
               {showBoards}
               <div className = {classes.newboard} onClick = {props.createnew} >
                   <p>Create new Board</p>
            </div>

            </div>
            
            
        </div>
        
    )
}


export default boards;