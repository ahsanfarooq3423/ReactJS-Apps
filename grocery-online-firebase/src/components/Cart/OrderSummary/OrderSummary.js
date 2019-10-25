import React, {Component} from 'react';
import classes from './OrderSummary.module.css';
import Aux from '../../../containers/hoc/Aux';



class OrderSummary extends Component {

    state = {
        name : null,
        address : null,
        city : null
    }

    nameHandler = (event) => {
        this.setState({name : event.target.value})
    }

    addressHandler = (event) => {
        this.setState({address : event.target.value})
    }

    cityHandler = (event) => {
        this.setState({city : event.target.value})
    }
    
    
    render(){
        
        return(
            <div>
            <h2>Shipping</h2>

            <div className = {classes.container}>
                
                <div className = {classes.form} >
                    <p>Name</p>
                    <input 
                        onChange = {this.nameHandler}
                        type = 'text'></input>

                    <p>Address</p>
                    <input 
                        type = 'text' 
                        placeholder = 'Line 1' 
                        onChange = {this.addressHandler}></input>
                    
                    
                    
                    <p>City</p>
                    <input 
                        type = 'text'
                        onChange = {this.cityHandler}></input>

                    <button onClick = {() => this.props.checkout(this.state)}>Place Order</button>
                </div>

                <div className = {classes.summary}>
                    <h2>Order Summary</h2>
                    <p>You have {this.props.cart.totalItems} items in your shopping cart.</p>
                    
                    
                    {Object.keys(this.props.cart.items).map((item,index) => {
                        return (
                            <Aux key = {index}>
                                    <hr/>
                                     <p> 
                                     {this.props.cart.items[item].units} x  {this.props.cart.items[item].itemName}
                                <span 
                                    className={classes.pullright}>
                                       $ {this.props.cart.items[item].price}</span></p>
                            </Aux>
                            
                        )
                            
                    })}

                    <hr/> 
                    <p className = {classes.total}>Total
                    <span className={classes.pullright}>$ {this.props.cart.totalPrice}</span></p>  

                </div>
            </div>
        </div>
        )
    }
}




export default OrderSummary;