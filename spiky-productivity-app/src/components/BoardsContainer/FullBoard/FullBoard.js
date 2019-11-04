import React, {Component} from 'react';
import Strip from './Strip/Strip';
import classes from './FullBoard.module.css';
import List from './List/List';




class FullBoard extends Component {

    
    render() {
        return(
           
            <div className = {classes.main} style = {{backgroundImage: "url(" + this.props.current.url + ")"}}>
                <Strip name = {this.props.current.name}/>
            
                <div className = {classes.listContainer}>
                    <List/>
                    <List/>
                   
                </div>
            
            </div>

            

        )     
    }
}


export default FullBoard;