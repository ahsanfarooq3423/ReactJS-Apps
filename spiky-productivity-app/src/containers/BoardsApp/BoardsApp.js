import React, {Component} from 'react';
import classes from './BoardsApp.module.css';
import LeftNavigation from '../../components/Boards/LeftNavigation/LeftNavigation';

class BoardsApp extends Component {
    render(){
        return(
            <div className = {classes.container} >
                <LeftNavigation/>
            </div>
        )
    }
}

export default BoardsApp;