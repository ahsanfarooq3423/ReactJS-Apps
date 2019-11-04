import React from 'react';
import classes from './Boards.module.css';
import Board from './Board/Board';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

const boards = (props) => {
    
    const boards = [];

    for (let key in props.boards) {
        let name = props.boards[key].name;
        let url = props.boards[key].img;
        boards.push({name,url})
    }
    let showBoards = boards.map((board, index) => {
        return (
            <Link
            style={{ textDecoration: 'none'}}
            // activeClassName = {classes.navlink}

            key = {index}
            to = {"/boards/" + board.name.toLowerCase()}>
            <Board
            click = {() => props.click(board)} 
            name = {board.name} 
            url = {board.url} />
              </Link>
           )
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