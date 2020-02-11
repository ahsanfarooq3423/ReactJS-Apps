import React from 'react';
import { connect } from 'react-redux';
import * as screenActions from '../../../store/actions/index';
import { Modal } from 'antd';
import { Input } from 'antd';
const { TextArea } = Input; 



const inputScreen = props => {
    return (
        <Modal
            title="Add a New Screen"
            visible={props.visible}
            onOk={props.onSetFalse}
            onCancel={props.onSetFalse}>
            <TextArea rows={4} />   
        </Modal>
    )
}

const mapStateToProps = state => {
    return {
        visible: state.screensState.visible
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onSetFalse: () => dispatch(screenActions.inputTrue()),
        onSetTrue: () => dispatch(screenActions.inputFalse())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(inputScreen);