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
        this.props.onGetIndex(index)
        this.setState({showModal: true})
    }

    undoModalHanlder = () => {
        console.log('undo CLIKCED!')
        this.setState({showModal :false})
    }

    getDeleteIndexHanlder = (index) => {
        //console.log(index + ' for delte')
        this.props.onDeleteNote(index);
    }

    
    

    render(){
        return(
            <div>
                {this.state.showModal ?
                     <Modal show 
                            clicked = {this.undoModalHanlder}>
                         <EditNote
                            input = {this.props.changeTitle}
                            content = {this.props.changeContent}
                            submitChange =  {() =>this.props.onSubmitChange(this.state.editIndex)}
                            changeTitle = {this.props.onEditTitle}
                            changeContent = {this.props.onEditContent}
                            undoModal = {this.undoModalHanlder}
                            /></Modal>:
                null
                }
                
                <AllNotes
                    deleteIndex = {this.getDeleteIndexHanlder}
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
        notes : state.notes,
        changeTitle : state.changeTitle,
        changeContent : state.changeContent
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTitleChange : (event) =>  dispatch({type : 'TITLE', value : event.target.value}),
        onContentChange : (event) =>  dispatch({type : 'CONTENT', value : event.target.value}),
        onSubmit : () => dispatch({type : 'SUBMIT'}),
        onGetIndex: (index) => dispatch({type: 'INDEX', index : index}),
        onEditTitle : (event) => dispatch({type: 'CHANGETITLE', value : event.target.value}),
        onEditContent : (event) => dispatch({type: 'CHANGECONTENT', value : event.target.value}),
        onSubmitChange : (index) => dispatch({type : 'SUBMITCHANGE', index: index}),
        onDeleteNote : (index) => dispatch({type: 'DELETE', index : index})
    }
}


export default  connect(mapStateToProps, mapDispatchToProps)(NotesApp);