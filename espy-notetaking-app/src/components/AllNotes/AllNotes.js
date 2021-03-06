import React from 'react';
import classes from './AllNotes.module.css';
import Note from './Note/Note';
import NewNote from './NewNote/NewNote';
import { connect } from 'react-redux';

//component that contains all the notes
const allnotes = (props) => {

    return(
        <div>
                <NewNote
                    title = {props.title}
                    content = {props.content}
                    submit = {props.submit}
                    />
                <div className = {classes.grid}>
                    {props.notes.map((note, index) => {

                        return (
                            <Note
                                deleteIndex = {() => props.deleteIndex(index)}
                                showModal = {props.showModal}
                                getIndex = {() => props.getIndex(index,props.notes)} 
                                key = {index} 
                                title = {note.title}  
                                text = {note.content}/>
                        )
                    })}
                </div>
            </div>
    )
}


const mapStateToProps = state => {
    return {
        notes : state.notes.notes
    }
}

export default connect(mapStateToProps)(allnotes);