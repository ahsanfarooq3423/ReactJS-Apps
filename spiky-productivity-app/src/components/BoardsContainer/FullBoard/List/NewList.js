import React, {Component} from 'react';
import classes from './NewList.module.css';
import Aux from '../../../../containers/hoc/Aux/Aux'



class NewList extends Component {

    state = {
        show : false
    }

    stateChangeHandler = () => {
        let bool = this.state.show;
        this.setState({show : !bool});
    }

    input = (
        <div className = {classes.inputname}>
            <input type = 'text' placeholder = 'Enter list title...'></input>   
            <div className = {classes.submission}>
                <button>Add List</button>
                <p>X</p>
            </div>
        </div>
    )

    render(){

        
        
        return(
            <Aux>
            {this.state.show ? <div className = {classes.newlist}  onClick = {this.stateChangeHandler} >
            <p>+ Add another list</p>
        </div> : this.input }
        </Aux>
            
        )
    }
}


export default NewList;