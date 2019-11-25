import React, {Component} from 'react';
import AllNotes from '../../components/AllNotes/AllNotes';
import EditNote from '../../components/AllNotes/EditNote/EditNote';
import Modal from '../../components/UI/Modal/Modal';
import { connect } from 'react-redux';

class NotesApp extends Component {

    state = {
        showModal : false,
        editIndex : null
    }

    getIndexHandler = (index) => {
        this.setState({showModal: true, editIndex : index})
    }

    undoModalHanlder = () => {
        this.setState({showModal :false})
    }

    
    

    render(){
        return(
            <div>
                {this.state.showModal ?
                     <Modal show>
                         <EditNote
                            submitChange =  {() =>this.props.onSubmitChange(this.state.editIndex)}
                            changeTitle = {this.props.onEditTitle}
                            changeContent = {this.props.onEditContent}
                            undoModal = {this.undoModalHanlder}
                            input = 'the rock is come' 
                            content = 'the rock is coming thats that'/></Modal>:
                null
                }
                
                <AllNotes
                
                    getIndex = {this.getIndexHandler} 
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
        onSubmit : () => dispatch({type : 'SUBMIT'}),
        onEditTitle : (event) => dispatch({type: 'CHANGETITLE', value : event.target.value}),
        onEditContent : (event) => dispatch({type: 'CHANGECONTENT', value : event.target.value}),
        onSubmitChange : (index) => dispatch({type : 'SUBMITCHANGE', index: index})
    }
}


export default  connect(mapStateToProps, mapDispatchToProps)(NotesApp);