import React, {Component} from 'react';
import classes from './Card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import ReactDOM from 'react-dom';   

class Card extends Component {

    state  = {
        actions : false,
        edit : false,
        value : ''
    }

    cardActionHandler = () => {
        let bool = this.state.actions;
        this.setState({actions : !bool});
    }


    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, true);
    }
    
    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, true);
    }
    
    handleClickOutside = event => {
        const domNode = ReactDOM.findDOMNode(this);
    
        if (!domNode || !domNode.contains(event.target)) {
            this.setState({
                actions: false
            });
        }
    }

    value = event => {
        const value = event.target.value;
        console.log(value)
        this.setState({value : value})
    }


    deleteCardHandler = () => {
        let list_name = this.props.info.name;
        let board_name = this.props.info.board.name.toLowerCase();
        let card_name = this.props.card;
        this.setState({actions : false});
        this.props.deletecard(board_name,list_name,card_name);
    }


    updateCartHanlder = () => {
        this.setState({edit : true})
        let list_name = this.props.info.name;
        let board_name = this.props.info.board.name.toLowerCase();
        let card_name = this.props.card;
        this.setState({actions : false});
        //this.props.updateCartHanlder(board_name,list_name,card_name, 'random');
        const value = this.state.value;
        console.log(value)
        this.props.updateCard(board_name, list_name, card_name, value);
    }
 

    render(){
        return(
            <div className = {classes.card}>
                        <p>{this.props.card}</p>
                        <div className = {classes.icon}>
                            <FontAwesomeIcon icon = {faPencilAlt} onClick = {this.cardActionHandler}  />

                           {this.state.actions ?
                           <div className = {classes.dropdown} >
                           <div>
                               <div className = {classes.actions}>Card Actions</div>
                           
                               <div 
                               onClick = {this.deleteCardHandler}
                               className = {classes.delete}>Delete this Card...</div>

                            <div 
                               onClick = {this.updateCartHanlder}
                               className = {classes.delete}>Update this Card...</div>
                           </div>
                          {this.state.actions ? <div><input onChange = {this.value}></input></div> : null} 
                   </div> : null } 


                        </div>
                    </div>
        )
    }
}



export default Card;