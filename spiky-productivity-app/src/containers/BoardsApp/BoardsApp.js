import React, {Component} from 'react';
import classes from './BoardsApp.module.css';
import LeftNavigation from '../../components/BoardsContainer/LeftNavigation/LeftNavigation';
import Boards from '../../components/BoardsContainer/Boards/Boards';


class BoardsApp extends Component {
    render(){
        return(
            <div className = {classes.container} >
                <LeftNavigation/>
                <Boards/>
            </div>
        )
    }
}

export default BoardsApp;