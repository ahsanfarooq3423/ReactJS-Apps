import React from 'react';
import classes from './Boards.module.css';
import Board from './Board/Board';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons';

const board = (props) => {
    
    const boards = [];

    for (let key in props.boards) {
        let name = props.boards[key].name;
        let url = props.boards[key].img;
        boards.push({name,url})
    }
    let showBoards = boards.map((board, index) => {
        return <Board key = {index} name = {board.name} url = {board.url} />
    })

    return(
        <div className = {classes.boardcontainer}>
            <h4> <FontAwesomeIcon icon = {faStar} /> Your Personal Boards</h4>
            <div className = {classes.boards}>
               {showBoards}
               <div className = {classes.newboard}>
                   <p>Create new Board</p>
               </div>
            </div>
        </div>
        
    )
}


export default board;