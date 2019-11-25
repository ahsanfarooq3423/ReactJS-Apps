import React, {Component} from 'react';
import classes from './AllNotes.module.css';
import Note from './Note/Note';
import NewNote from './NewNote/NewNote';

class AllNotes extends Component {

   
 
    render(){
        return(
            <div>
                <NewNote
                    title = {this.props.title}
                    content = {this.props.content}
                    submit = {this.props.submit}
                    />
                <div className = {classes.grid}>
                    {this.props.notes.map((note, index) => {

                        return (
                            <Note
                                deleteIndex = {() => this.props.deleteIndex(index)}
                                showModal = {this.props.showModal}
                                getIndex = {() => this.props.getIndex(index)} 
                                key = {index} 
                                title = {note.title}  
                                text = {note.content}/>
                        )
                    })}
                </div>
            </div>
            
        )
    }
}

export default AllNotes;