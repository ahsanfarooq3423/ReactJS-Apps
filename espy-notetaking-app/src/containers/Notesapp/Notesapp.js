import React, {Component} from 'react';
import AllNotes from '../../components/AllNotes/AllNotes';
import EditNote from '../../components/AllNotes/EditNote/EditNote';
import Modal from '../../components/UI/Modal/Modal';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actions';




class NotesApp extends Component {
    
    //local UI state
    state = {
        showModal : false,
        editIndex : null
    }

    //pass index to the dispatch function and set Local state
    getIndexHandler = (index,notes) => {
        this.props.onGetIndex(index,notes)
        this.setState({showModal: true})
    }
    //hide modal state
    undoModalHanlder = () => {
        this.setState({showModal :false})
    }
    //pass index to the dispatcher
    getDeleteIndexHanlder = (index) => {
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
                    submit = {() => 
                        {
                            console.log(this.props.currentContent,this.props.currentTitle)
                            this.props.onSubmit(this.props.currentContent,this.props.currentTitle)
                        }
                        }
                    />
            </div>
        )
    }
}


//setting the store states from reducer
const mapStateToProps = state => {
    console.log(state)
    return {
        notes : state.notes.notes,
        currentTitle : state.changes.currentTitle,
        currentContent : state.changes.currentContent,
        changeTitle : state.changes.changeTitle,
        changeContent : state.changes.changeContent,
        index : state.changes.index
    }
}

//initializing the store actions from reducer
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