import React from 'react';
import classes from './Modal.module.css';
import Aux from '../../../containers/hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';


//popup modal functional component uses backdrop
const modal = ( props ) => (
    <Aux>
        <Backdrop show = {props.show} clicked = {props.close}/>
        <div
            className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Aux>
);


export default modal;