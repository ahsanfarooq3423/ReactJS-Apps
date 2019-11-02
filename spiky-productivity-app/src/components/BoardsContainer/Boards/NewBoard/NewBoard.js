import React, {Component} from 'react';
import classes from './NewBoard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faUser } from '@fortawesome/free-solid-svg-icons';



class NewBoard extends Component {

    state = {
        name : '',
        url : 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1655&q=80'
    }


    getName = (event) => {
        this.setState({name : event.target.value});
        
    }

    clearName = () => {
        this.props.getinfo(this.state)  
    }

   

    render() {
        let buttonStyles = [];
        buttonStyles.push(classes.createbutton)
        
        if (!this.props.showbutton) {
            buttonStyles.push(classes.disablebutton);
        }


        return(
            <div>
            <div className = {classes.main}>
                    <div>
                        <div className = {classes.input} > 
                            <input
                                onChange = {this.getName} 
                                className = {classes.title} 
                                type = 'text' 
                                placeholder = 'Add Board Title'/>
                            <FontAwesomeIcon onClick = {this.props.close} icon = {faTimes} 
                                style = {{backgroundColor : 'black',
                                        color: 'white',
                                        cursor : 'pointer',
                                        fontSize : '14px',
                                        marginTop: '10px',
                                        alignContent: 'right'}}/>
                        </div>
            
                        <div className = {classes.user}>
                        <FontAwesomeIcon icon = {faUser} 
                                style = {{backgroundColor : 'black',
                                        color: 'white',
                                        fontSize : '14px',
                                        alignContent: 'right'}}/>
                            <p>This is your Personal Board</p>
                        </div>
                    </div>    
                    
                    <div>
            
                    <div className = {classes.backgrounds}>
                        <div className = {classes.boxes}></div>
                        <div className = {classes.boxes}></div>
                        <div className = {classes.boxes}></div>
                    </div>
            
            
                    <div className = {classes.backgrounds}>
                        <div className = {classes.boxes}></div>
                        <div className = {classes.boxes}></div>
                        <div className = {classes.boxes}></div>
                    </div>
            
                    <div className = {classes.backgrounds}>
                        <div className = {classes.boxes}></div>
                        <div className = {classes.boxes}></div>
                        <div className = {classes.boxes}
                            style = {{backgroundColor : 'gray'}}><span>...</span></div>
                    </div>    
                    </div>
            
                    
                    
                    </div>
            
                    
                    <button 
                        onClick = {() => this.props.getinfo(this.state)} 
                        className = {buttonStyles.join(' ')}>Create Board</button>
            
                    </div>
    

        )
    }
}



export default NewBoard;