import React, {Component} from 'react';
import GroceryTypes from '../../components/Grocery/GroceryTypes/GroceryTypes';
import GroceryItems from '../../components/Grocery/GroceryItems/GroceryItems';
import classes from './GroceryApp.module.css';


class GroceryApp extends Component {
    state = {
        
        categories : {
            bread : { name : 'Bread' , type : 'bread' ,items : {
                'toast' : { price : 4  }, 'pita' : { price : 3 }, 'whole-wheat' : { price : 7 }
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
        currentPage : 'bread'

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
    


    render(){
        return(
            <div className = {classes.container}> 
                <GroceryTypes 
                    types = {this.getCategoriesNames()}  
                    getPage = {this.getPageNameHandler}
                    currentPage = {this.state.currentPage}  />
                <GroceryItems data = {this.state.categories} currentPage = {this.state.currentPage}/>
            </div>
        );
    }
}

export default GroceryApp;