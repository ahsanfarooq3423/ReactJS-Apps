import React, {Component} from 'react';
import classes from './AllNotes.module.css';
import Note from './Note/Note';
import NewNote from './NewNote/NewNote';

class AllNotes extends Component {
    componentDidMount = () => {
        console.log(this.props.notes)
    }
    render(){
        return(
            <div>
                <NewNote/>
                <div className = {classes.grid}>
                    {this.props.notes.map((note, index) => {

                        return (
                            <Note key = {index} title = {note.title}  text = {note.content}/>
                        )
                    })}
                </div>
            </div>
            
        )
    }
}

export default AllNotes;