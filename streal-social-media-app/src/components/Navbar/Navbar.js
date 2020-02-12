import React, { Fragment } from 'react';
import NavLinks from './Navlinks/Navlinks';

import { connect } from 'react-redux';

import InputScreen from '../Screens/InputScreen/InputScreen';
import * as actions from '../../store/actions/index';



const navbar = props => {
    return (
        <Fragment>
            <NavLinks
                logout = {props.onLogout} 
                showModal={props.onShowInputScreen} 
                isAuth = {props.isAuthenticated} />
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
        onShowInputScreen: () => dispatch({ type: 'INPUT_TRUE' }),
        onLogout : () => dispatch(actions.logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(navbar);