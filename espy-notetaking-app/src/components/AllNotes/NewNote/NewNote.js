import React, {Component} from 'react';
import classes from './NewNote.module.css';
import Aux from '../../../containers/hoc/Aux/Aux';

class NewNote extends Component {

    state = {
        fullnote : false
    }

    fullnoteToggleHandler = () => {
        let bool = this.state.fullnote;
        this.setState({fullnote : !bool})
    }


    render(){
        let show = (
            <div onClick = {this.fullnoteToggleHandler} className = {classes.small} >
                <p>Take a note</p>
            </div>
        )

        if (this.state.fullnote) {
            show = (
                <div className = {classes.full}>
                    <input 
                        onChange = {this.props.title}
                        className = {classes.title} placeholder = 'Title'></input>
                    <br/>
                    <textarea 
                        onChange = {this.props.content}
                        className = {classes.note} placeholder = 'Take a note...'></textarea>
                    <br/>
                    <div className = {classes.buttons}>
                        <button 
                            onClick = {this.fullnoteToggleHandler}
                            className = {classes.cancel}>Cancel</button>
                        <button 
                        onClick = {this.props.submit}
                        className = {classes.done}>Done</button>
                    </div>
                </div>
            )
        }

        return <Aux>
                {show}
              </Aux>
        
        
    }
}





export default NewNote;