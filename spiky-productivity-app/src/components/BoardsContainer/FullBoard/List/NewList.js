import React, {Component} from 'react';
import classes from './NewList.module.css';
import Aux from '../../../../containers/hoc/Aux/Aux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';



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
            <input 
                onChange = {this.props.newlistname}
                type = 'text' placeholder = 'Enter list title...'></input>   
            <div className = {classes.submission}>
                <button>Add List</button>
                <div className = {classes.close} >
                    <FontAwesomeIcon
                        className = {classes.icon}
                        onClick = {this.stateChangeHandler} 
                        icon = {faWindowClose} />
                </div>
                
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