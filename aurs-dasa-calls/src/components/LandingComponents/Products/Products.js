import React from 'react';
import classes from './Products.module.css';
import ProductData from './ProductsData';
import Product from './Product/Product';

import { Link } from 'react-router-dom'
import {withRouter} from 'react-router';

const products = (props) => {
    return (
        <div className={classes.main}>
            <h1> <span className={classes.strong}>Products</span> Overview</h1>
            <hr />
            <div className={classes.grid}>
                {ProductData.map(listItem =>
                    <Product {...props} data={listItem} />)
                }
            </div>
        </div>
    )
}

export default withRouter(products);