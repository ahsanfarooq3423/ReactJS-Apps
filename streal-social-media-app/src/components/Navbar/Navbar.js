import React, { Fragment } from 'react';
import NavLinks from './Navlinks/Navlinks';

import { connect } from 'react-redux';

import InputScreen from '../Screens/InputScreen/InputScreen';



const navbar = props => {
    return (
        <Fragment>
            <NavLinks showModal={props.onShowInputScreen} isAuth = {props.isAuthenticated} />
            <InputScreen />
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
        visible : state.screensState.visible,
        message: state.screensState.message,
        isAuthenticated : state.authState.token !== null

    }
}

const mapDispatchToProps = dispatch => {
    return {
        onShowInputScreen: () => dispatch({ type: 'INPUT_TRUE' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(navbar);