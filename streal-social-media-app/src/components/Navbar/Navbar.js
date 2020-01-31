import React, { Fragment } from 'react';
import NavLinks from './Navlinks/Navlinks';

import { connect } from 'react-redux';

import InputScreen from '../Screens/InputScreen/InputScreen';



const navbar = props => {
    return (
        <Fragment>
            <NavLinks showModal={props.onShowInputScreen} />
            <InputScreen />
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
        visible : state.visible,
        message: state.message
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onShowInputScreen: () => dispatch({ type: 'INPUT_TRUE' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(navbar);