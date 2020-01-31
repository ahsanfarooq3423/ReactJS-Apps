import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'antd';


const inputScreen = props => {
    return (
        <Modal
            title="Add a New Screen"
            visible={props.visible}
            onOk={props.onSetFalse}
            onCancel={props.onSetFalse}>
            <h1> Hello From the Modal</h1>
        </Modal>
    )
}

const mapStateToProps = state => {
    return {
        visible: state.visible
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onSetFalse: () => dispatch({ type: 'INPUT_FALSE' }),
        onSetTrue: () => dispatch({ type: 'INPUT_TRUE' })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(inputScreen);