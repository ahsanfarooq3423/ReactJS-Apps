import React, {Component} from 'react';
import GroceryTypes from '../../components/Grocery/GroceryTypes/GroceryTypes';
import GroceryItems from '../../components/Grocery/GroceryItems/GroceryItems';
import classes from './GroceryApp.module.css';
import Cart from '../../components/Cart/Cart';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Cart/OrderSummary/OrderSummary';


class GroceryApp extends Component {
    state = {
        
        categories : {
            bread : { name : 'Bread' , type : 'bread' ,items : {
                'toast' : { price : 4  }, 'pita' : { price : 3 }, 'whole-wheat' : { price : 7 },
                'bagel' : {price : 3.5}
            } },
            dairy : { name : 'Dairy' , type : 'dairy' ,  items : {
                'milk' : { price : 3 }, 'cheese' : { price : 4.5 } , 'butter' : {price : 2.5}
            } },
            fruits : { name : 'Fruits', type : 'fruits' , items : {
                'banana' : {price : 1.5 } , 'apple' : {price : 2.5} , 'grapes' : { price : 3.4}
            } },
            seasons_spices : { name : 'Seasonings and Spices' , type : 'seasons_spices', items : {
                'clove' : { price : 1.8 }, 'chilli' : {price : 4.9} , 'oregano' : {price : 4.8}
            } },
            vegetables : { name : 'Vegetables', type : 'vegetables', items : {
                'tomato' : {price : 4.1}, 'potato': {price : 1.2} , 'spinach' : {price : 1.7}
            }}

        },
        currentPage : 'bread',
        cart : {
            totalPrice : 0,
            totalItems : 0,
            items : {}
        },
        show : 'home',
        modal : false

    }

    getCategoriesNames = () => {
        let names =  Object.keys(this.state.categories).map (type => {
            return this.state.categories[type]
        })
        return names;
    }

    


    getPageNameHandler = (category) => {
        this.setState({currentPage : category.type})
    }

    getItemToCartHandler = (item,page) => {
        let newItem = {}
        newItem.itemName = item;
        newItem.type = page;
        newItem.price = this.state.categories[page].items[item].price;
        
        let cart = {...this.state.cart};
        cart.totalPrice += newItem.price;
        cart.totalItems += 1;
        
        
        let itemPrice = this.state.categories[page].items[item].price

        
        if (item in cart.items){
            cart.items[item].price += itemPrice
            //console.log('cart.items[item].price, ', cart.items[item].price)
            let presentUnits = this.state.cart.items[item].units;
            
            cart.items[item].units =+ presentUnits + 1;
            //console.log('cart.items[item].units, ', cart.items[item].units)
            
        }
        else {
            newItem.units = 1;
            cart.items[item] = newItem
        }

        this.setState({cart : cart});
        

    }

    

    clearCartHandler = () => {
        const emptyCart  = {
            totalPrice : 0,
            totalItems : 0,
            items : {}
        }
        this.setState({cart : emptyCart})
    }
    
    removeItemHandler = (item, page) => {
        let cart = {...this.state.cart};
        let unitPrice = this.state.categories[page].items[item].price;
        let totalPrice = this.state.cart.items[item].price;
        let totalUnits = this.state.cart.items[item].units;
        
        if (totalUnits ===0) {
            //console.log('INSIDE IF STATEMENT')
        }
        else {
            totalPrice = totalPrice - unitPrice;
            cart.items[item].price = totalPrice;
            totalUnits = totalUnits -1;
            cart.items[item].units = totalUnits;
            
            
        }
        if (cart.totalItems !== 0){
            cart.totalItems -= 1;
        }
        cart.totalPrice -= unitPrice;
        this.setState({cart : cart});


    }

    showCartHandler = () => {
        this.setState({show : 'cart'})
    }

    showHomeHandler = () => {
        this.setState({show : 'home'})
    }

    purchaseCancelHandler = () => {
        this.setState({show : 'cart', modal : false})

    }

    showSummaryHandler = () => {
        this.setState({modal : true})
    }

  

    render(){
        let show = ( <div className = {classes.container}> 
            <GroceryTypes 
                types = {this.getCategoriesNames()}  
                getPage = {this.getPageNameHandler}
                currentPage = {this.state.currentPage}  />
            <GroceryItems

                cart = {this.state.cart}
                totalItems = {this.state.cart.totalItems} 
                data = {this.state.categories} 
                currentPage = {this.state.currentPage}
                getItem = {this.getItemToCartHandler}
                removeItem = {this.removeItemHandler}/>
                </div>)
        if (this.state.show === 'cart'){
            show =  <Cart
            summary = {this.showSummaryHandler}
            removeItem = {this.removeItemHandler}
            getItem = {this.getItemToCartHandler}
            clear = {this.clearCartHandler}
            cart = {this.state.cart} 
            grocery = {this.state.categories}/>
        }
        

        return(
        
         <div>
             <Toolbar 
                items = {this.state.cart.totalItems} 
                cart = {this.showCartHandler}
                home = {this.showHomeHandler}/>
                <Modal show = {this.state.modal} close = {this.purchaseCancelHandler}>
                    <OrderSummary cart  = {this.state.cart}/>
                </Modal>
             {show}
            

         </div>  
        
           
        
           
           
        );
    }
}

export default GroceryApp;