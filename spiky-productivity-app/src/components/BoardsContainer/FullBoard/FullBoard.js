import React, {Component} from 'react';
import classes from './FullBoard.module.css';


class FullBoard extends Component {
    render() {
        return(
            <div className = {classes.main}>
                <h1>{this.props.current.name}</h1>
            </div>
            

        )
        
    }
}


export default FullBoard;