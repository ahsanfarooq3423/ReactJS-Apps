import React, {Component} from 'react';
import GroceryTypes from '../../components/Grocery/GroceryTypes/GroceryTypes';
import GroceryItems from '../../components/Grocery/GroceryItems/GroceryItems';
import classes from './GroceryApp.module.css';
import Cart from '../../components/Cart/Cart';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Cart/OrderSummary/OrderSummary';
import Confirmation from '../../components/Cart/Confirmation/Confimation';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios';
import withErrorHandler from '../../containers/hoc/withErrorHandler/withErrorHandler';
import Aux from '../../containers/hoc/Aux';

class GroceryApp extends Component {
   
    
    state = {
        //category state for the grocery items and their prices
        // categories : {
        //     bread : { name : 'Bread' , type : 'bread' ,items : {
        //         'toast' : { price : 4  }, 'pita' : { price : 3 }, 'whole-wheat' : { price : 7 },
        //         'bagel' : {price : 3.5}
        //     } },
        //     dairy : { name : 'Dairy' , type : 'dairy' ,  items : {
        //         'milk' : { price : 3 }, 'cheese' : { price : 4.5 } , 'butter' : {price : 2.5}
        //     } },
        //     fruits : { name : 'Fruits', type : 'fruits' , items : {
        //         'banana' : {price : 1.5 } , 'apple' : {price : 2.5} , 'grapes' : { price : 3.4}
        //     } },
        //     seasons_spices : { name : 'Seasonings and Spices' , type : 'seasons_spices', items : {
        //         'clove' : { price : 1.8 }, 'chilli' : {price : 4.9} , 'oregano' : {price : 4.8}
        //     } },
        //     vegetables : { name : 'Vegetables', type : 'vegetables', items : {
        //         'tomato' : {price : 4.1}, 'potato': {price : 1.2} , 'spinach' : {price : 1.7}
        //     }}

        // },

        categories : null,
        
        //router
        currentPage : 'bread',
        //the shopping cart in which grocery items are added
        cart : {
            totalPrice : 0,
            totalItems : 0,
            items : {}
        },
        //modal status (i.e. summary of the shopping cart)
        show : 'home',
        modal : false,
        loading : false

    }

    componentDidMount () {
        axios.get('/categories/-Ls7PfSPC6at0qqVqbqb.json')
                    .then(response => {
                        this.setState({categories : response.data})
                    })
    }

    


    //return the names of the types of groceries i.e. ['Bread' , 'Dairy' ...]
    getCategoriesNames = () => {
        let names =  Object.keys(this.state.categories).map (type => {
            return this.state.categories[type]
        })
        return names;
    }

    

    //router for the currentPage
    getPageNameHandler = (category) => {
        this.setState({currentPage : category.type})
    }


    //main function, add items from categories to the cart
    getItemToCartHandler = (item,page) => {
        //newItem -> creating the new object of an item to be added in the cart items
        let newItem = {}
        newItem.itemName = item;
        newItem.type = page;
        newItem.price = this.state.categories[page].items[item].price;
        
        let cart = {...this.state.cart};
        cart.totalPrice += newItem.price;
        cart.totalItems += 1;
        
        
        let itemPrice = this.state.categories[page].items[item].price

        //checking if the item is already present in the cart
        if (item in cart.items){
            cart.items[item].price += itemPrice
            
            let presentUnits = this.state.cart.items[item].units;
            //incrementing the units for the cart item
            cart.items[item].units =+ presentUnits + 1;
            
            
        }
        // the that new item to the cart
        else {
            newItem.units = 1;
            cart.items[item] = newItem
        }

        this.setState({cart : cart});
        

    }

    
    //removing all the present elements in the cart
    clearCartHandler = () => {
        const emptyCart  = {
            totalPrice : 0,
            totalItems : 0,
            items : {}
        }
        this.setState({cart : emptyCart})
    }
    
    //subtract or remove a particular item from the cart
    removeItemHandler = (item, page) => {
        let cart = {...this.state.cart};
        let unitPrice = this.state.categories[page].items[item].price;
        let totalPrice = this.state.cart.items[item].price;
        let totalUnits = this.state.cart.items[item].units;
        
        
        if (totalUnits ===0) {
            //console.log('INSIDE IF STATEMENT')
        }
        else {
            //subtracting the properties
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

    //router
    showCartHandler = () => {
        this.setState({show : 'cart'})
    }
    //router
    showHomeHandler = () => {
        this.setState({show : 'home'})
    }
    //router
    purchaseCancelHandler = () => {
        this.setState({show : 'cart', modal : false})

    }
    //modal router
    showSummaryHandler = () => {
        this.setState({modal : true})
    }

    //checkout to place the order
    checkoutHandler = (customer) => {
        this.setState({loading : true})
        let order = {
            cart : this.state.cart,
            price : this.state.cart.price,

            customer : {
                name : customer.name,
                address : customer.address,
                city : customer.city
            }
        }

        if (
            customer.name === "" || 
            customer.address === "" || 
            customer.city === "" ||
            order.cart.totalItems === 0 ||
            customer.name === null || 
            customer.address === null || 
            customer.city === null){
            this.setState({loading : false})
            alert('Complete the following details .... Order cannot be proceded')
            return
        }
        else {  
                axios.post('/orders.json', order)
                .then(response => {
                    this.setState({loading : false})
                })
                .catch(error => {
                    this.setState({loading : false})
                })

                this.clearCartHandler();
                this.setState({show : 'confirmation' , modal : false})

        }

    }

 
    render(){
        //show contains GroceryPage or Cart or Confimation Page
        let show = <Spinner/>
        if (this.state.categories){

        
        show = ( <div className = {classes.container}> 
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

        }
        if (this.state.show === 'cart'){
            show =  <Cart
            summary = {this.showSummaryHandler}
            removeItem = {this.removeItemHandler}
            getItem = {this.getItemToCartHandler}
            clear = {this.clearCartHandler}
            cart = {this.state.cart} 
            grocery = {this.state.categories}/>
        }

        if (this.state.show === 'confirmation'){
            show = <Confirmation/>
        }

        let orderSummary = ( <OrderSummary 
            checkout = {this.checkoutHandler}
            cart  = {this.state.cart}/>)

        if (this.state.loading){
            orderSummary =  <Spinner/>
        }


        return(
        
         <div>
            <Toolbar 
                        items = {this.state.cart.totalItems} 
                        cart = {this.showCartHandler}
                        home = {this.showHomeHandler}/>
                        <Modal show = {this.state.modal} close = {this.purchaseCancelHandler}>
                        {orderSummary}
                        </Modal>
                    {show}
            
         </div>  
           
        );
    }
}

export default  GroceryApp;