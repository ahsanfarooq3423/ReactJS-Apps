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
        if (this.state.screenContent.length < 5) {
            return this.showAlert()
        }

    }

    componentDidMount() {
        console.log(this.props.loggedUser)
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
        loggedUser : state.authState
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onSetFalse: () => dispatch(screenActions.inputTrue()),
        onSetTrue: () => dispatch(screenActions.inputFalse()),
        onPostScreen : () => dispatch(screenActions.postScreen())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(InputScreen);