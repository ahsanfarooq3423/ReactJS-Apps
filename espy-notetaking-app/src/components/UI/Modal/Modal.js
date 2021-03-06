import React from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../containers/hoc/Aux/Aux';

//show a backdrop at the back screen
//pop up window
const modal = ( props ) => {
    return (
        <Aux>
            <Backdrop show = {props.show} clicked = {props.clicked}/>
            <div className = {classes.Modal}
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
