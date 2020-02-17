import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { connect } from 'react-redux';
import * as screenActions from '../../../store/actions/index';
import { Modal } from 'antd';
import { Input } from 'antd';
import { Alert } from  'react-bootstrap';

const { TextArea } = Input; 


class InputScreen extends React.Component {

    state = {
        screenContent : '',
        alert : false
    }

    onScreenContentChangeHandler = event => {
        let content = event.target.value;
        this.setState({screenContent : content})
    }


    submitScreenHandler = () => {
        let content = this.state.screenContent;
        if (this.state.screenContent.length < 5) {
            return this.showAlert()
        }

        this.props.onPostScreen(content,this.props.loggedUserId)
        this.props.onSetFalse()
    }

    showAlert = () => {
        this.setState({alert : true})
        setTimeout(() => {
            this.setState({alert : false})
        },3000)
    }

    render() {
        return (
            <Modal
                title="Add a New Screen"
                visible={this.props.visible}
                onOk={this.submitScreenHandler}
                onCancel={this.props.onSetFalse}>
                {this.state.alert ? <Alert variant='danger' >Please Enter more words...</Alert>: null}
                <TextArea rows={4} onChange = {this.onScreenContentChangeHandler} />
            </Modal>
        )
    }
    
}


const mapStateToProps = state => {
    return {
        visible: state.screensState.visible,
        isAuthenticated : state.authState.token !== null,
        loggedUserId : state.authState.userId

    }
}


const mapDispatchToProps = dispatch => {
    return {
        onSetFalse: () => dispatch(screenActions.inputTrue()),
        onSetTrue: () => dispatch(screenActions.inputFalse()),
        onPostScreen : (content, userId) => dispatch(screenActions.postScreen(content, userId))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(InputScreen);