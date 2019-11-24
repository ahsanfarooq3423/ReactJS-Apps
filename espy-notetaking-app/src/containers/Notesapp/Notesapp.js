import React, {Component} from 'react';
import AllNotes from '../../components/AllNotes/AllNotes';
import { connect } from 'react-redux';

class NotesApp extends Component {

    

    render(){
        return(
            <div>
                <AllNotes 
                    title = {this.props.onTitleChange}
                    content = {this.props.onContentChange}
                    submit = {this.props.onSubmit}
                    notes = {this.props.notes}/>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        notes : state.notes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTitleChange : (event) =>  dispatch({type : 'TITLE', value : event.target.value}),
        onContentChange : (event) =>  dispatch({type : 'CONTENT', value : event.target.value}),
        onSubmit : () => dispatch({type : 'SUBMIT'})
    }
}


export default  connect(mapStateToProps, mapDispatchToProps)(NotesApp);