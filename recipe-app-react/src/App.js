import React, {Component} from 'react';
import styles from './App.module.css';
import Leftbox from './Leftbox/Leftbox';
import Rigthbox from './Rigthbox/Rigthbox';




class App extends Component {
  state = {
    recipes: [
      {name: 'Burger', ingredients: 'Lorem impus', id : '1jsa'},
      {name: 'Chinese', ingredients: 'Lorem impus', id : 'sdw'},
      {name: 'Pizza', ingredients: 'Lorem kia impus', id : 'swesdf'}
            ],
      showRecipes : false,
      recipeStatus : 'addnew'
  }

  showHomePageHandler = () => {
    this.setState({showRecipes : false})
    this.setState({recipeStatus : ''})
  }

  addNewRecipeHandler = () => {
    this.setState({recipeStatus : 'addnew'})
    
  }

  showRecipesHandler = () => {
    this.setState({recipeStatus : 'showall'})
     
  }

  getNameHandler = (event) => {
    console.log(event.target.value)
  }

  getIngredientsHandler = (event) => {
    console.log(event.target.value)
  }

  render(){
    return (
      <div className={styles.App}>
          <Leftbox 
                  recipes = {this.state.recipes}
                  addNew = {this.addNewRecipeHandler} 
                  homePage = {this.showHomePageHandler}
                  showRecipes = {this.showRecipesHandler} />
          
          <Rigthbox 
                    recipes = {this.state.recipes} 
                    recipeStatus = {this.state.recipeStatus} 
                    addNew_show = {this.state.addNewRecipe}
                    getname = {this.getNameHandler}
                    getingredient = {this.getIngredientsHandler} />
       
      </div>
    );
  }
  
}

export default App;
