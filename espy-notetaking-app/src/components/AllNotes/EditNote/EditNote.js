import React, {Component} from 'react';
import classes from './EditNote.module.css';


class  EditNote extends Component {

    onSubmitHanlder = () => {
        this.props.undoModal()
        this.props.submitChange()
    }

    render(){
        return(
            <div className = {classes.main}>
                <input 
                    onChange = {this.props.changeTitle}
                    className = {classes.title} defaultValue = {this.props.input}/>
                <textarea 
                    onChange = {this.props.changeContent}
                    className = {classes.note} defaultValue = {this.props.content} />
    
                <div className = {classes.buttons}>
                            <button
                                onClick = {this.props.undoModal}
                                className = {classes.cancel}>Cancel</button>
                            <button 
                                onClick = {this.onSubmitHanlder}    
                                className = {classes.done}>Done</button>
                </div>
    
            </div>
        )
    }
}


    


export default EditNote;