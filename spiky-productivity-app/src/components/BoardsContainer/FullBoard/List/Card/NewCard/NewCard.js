import React, {Component} from 'react';
import classes from './NewCard.module.css';
import Aux from '../../../../../../containers/hoc/Aux/Aux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';



class NewCard extends Component {

    state = {
        show : true
    }

    stateChangeHandler = () => {
        let bool = this.state.show;
        this.setState({show : !bool});
    }

    input = (
        <div className = {classes.inputname}>
            <textarea 
                className = {classes.textarea}
                type = 'textarea' 
                placeholder = 'Enter a new title for this card'></textarea>   
            <div className = {classes.submission}>
                <button>Add Card</button>
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
            <p>+ Add another Card</p>
        </div> : this.input }
        </Aux>
            
        )
    }
}


export default NewCard;