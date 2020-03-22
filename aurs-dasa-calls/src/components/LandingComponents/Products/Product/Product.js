import React from 'react';
import classes from './Product.module.css';

import image from '../../../../images/products/DA.png'

const product = () => {
    return (
        <div className = {classes.main}>
            <img className={classes.image} src={image} alt="Data Analytics" />
            <hr/>
            <p>The data analytics for the making of the calls that is it.</p>
            <button className = {classes.button}>
                Analyze
            </button>
        </div>
    )
}

export default product;