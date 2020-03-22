import React from 'react';
import classes from './Products.module.css';

import Product from './Product/Product';


const products = () => {
    return (
        <div className={classes.main}>
            <h1> <span className={classes.strong}>Products</span> Overview</h1>
            <hr />
            <div className={classes.grid}>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    )
}

export default products;