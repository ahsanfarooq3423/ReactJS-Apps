import React from 'react';
import classes from './OrderSummary.module.css';
import Aux from '../../../containers/hoc/Aux';


const ordersummary = (props) => {
    //order summary component to be shown in the modal

    return (
        <div>
            <h2>Shipping</h2>

            <div className = {classes.container}>
                
                <div className = {classes.form} >
                    <p>Name</p>
                    <input type = 'text'></input>

                    <p>Address</p>
                    <input type = 'text' placeholder = 'Line 1'></input>
                    
                    <input type = 'text' placeholder = 'Line 2'></input>
                    
                    <p>City</p>
                    <input type = 'text'></input>

                    <button onClick = {props.checkout}>Place Order</button>
                </div>

                <div className = {classes.summary}>
                    <h2>Order Summary</h2>
                    <p>You have {props.cart.totalItems} items in your shopping cart.</p>
                    
                    
                    {Object.keys(props.cart.items).map((item,index) => {
                        return (
                            <Aux key = {index}>
                                    <hr/>
                                     <p> 
                                     {props.cart.items[item].units} x  {props.cart.items[item].itemName}
                                <span 
                                    className={classes.pullright}>
                                       $ {props.cart.items[item].price}</span></p>
                            </Aux>
                            
                        )
                            
                    })}

                    <hr/> 
                    <p className = {classes.total}>Total
                    <span className={classes.pullright}>$ {props.cart.totalPrice}</span></p>  

                </div>
            </div>
        </div>
    )
}


export default ordersummary;