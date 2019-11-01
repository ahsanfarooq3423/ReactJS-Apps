import React from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../containers/hoc/Aux/Aux';

//popup modal functional component uses backdrop
const modal = ( props ) => {

    return(
    <Aux>
        <Backdrop show = {props.show} clicked = {props.close}/>
        <div
            className={classes.Modal}
            style={{
                width : props.width,
                height : props.height,
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Aux>
    )
    
}


export default modal;