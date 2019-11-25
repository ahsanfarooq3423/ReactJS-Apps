import React, {Component} from 'react';
import AllNotes from '../../components/AllNotes/AllNotes';
import EditNote from '../../components/AllNotes/EditNote/EditNote';
import Modal from '../../components/UI/Modal/Modal';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

class NotesApp extends Component {

    state = {
        showModal : false,
        editIndex : null
    }

    getIndexHandler = (index,notes) => {
        this.props.onGetIndex(index,notes)
        this.setState({showModal: true})
    }

    undoModalHanlder = () => {
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
                            
                            submitChange =  {() =>
                                this.props.onSubmitChange(this.props.index,this.props.changeTitle,this.props.changeContent)}
                            
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
                    submit = {() => this.props.onSubmit(this.props.currentContent,this.props.currentTitle)}
                    notes = {this.props.notes}/>
            </div>
        )
    }
}



const mapStateToProps = state => {
    return {
        notes : state.notes.notes,
        currentTitle : state.changes.currentTitle,
        currentContent : state.changes.currentContent,
        changeTitle : state.changes.changeTitle,
        changeContent : state.changes.changeContent,
        index : state.changes.index
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTitleChange : (event) =>  dispatch({type : actionTypes.TITLE, value : event.target.value}),
        onContentChange : (event) =>  dispatch({type : actionTypes.CONTENT, value : event.target.value}),
        onSubmit : (content,title) => dispatch({type : actionTypes.SUBMIT, content : content, title: title}),
        onGetIndex: (index,notes) => dispatch({type: actionTypes.INDEX, index : index, notes : notes}),
        onEditTitle : (event) => dispatch({type: actionTypes.CHANGETITLE, value : event.target.value}),
        onEditContent : (event) => dispatch({type: actionTypes.CHANGECONTENT, value : event.target.value}),
        
        onSubmitChange : (index,changeTitle, changeContent) =>
        dispatch({type : actionTypes.SUBMITCHANGE, 
                  index: index, 
                  changeTitle: changeTitle, 
                  changeContent : changeContent}),
        
        onDeleteNote : (index) => dispatch({type: actionTypes.DELETE, index : index})
    }
}


export default  connect(mapStateToProps, mapDispatchToProps)(NotesApp);