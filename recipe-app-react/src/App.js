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
      showOne : 0,
      showRecipes : false,
      recipeStatus : 'showone',
      name : '',
      ingredient : '',
      
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
    const name =event.target.value
    this.setState({name : name})
  }

  getIngredientsHandler = (event) => {
    const ingredient = event.target.value
    this.setState({ingredient : ingredient})
  }

  submitRecipeHandler = () => {
    let recipes = [...this.state.recipes];
    if (this.state.name.length !== 0 && this.state.ingredient.length !==  0){
      recipes.push({name: this.state.name, ingredients: this.state.ingredient, id : Math.random().toString()+ 'asw'})
      
    }
    else {
      alert("Recipe Cannot be Empty")
    }
    
    this.setState({recipes : recipes, name : ''
                            , ingredient : ''
                            , recipeStatus: 'showall'
                            })

  }

  showOneRecipeHandler = (event) => {
    this.setState({recipeStatus : 'showone'})
    const recipe_name = event.target.innerText;
    const recipes = [...this.state.recipes]
    
    for (var i = 0; i < recipes.length; i++) {
      if (recipes[i].name === recipe_name){
        this.setState({showOne : i})
      }

    }

  }

  render(){
    return (
      <div className={styles.App}>
          <Leftbox 
                  recipes = {this.state.recipes}
                  addNew = {this.addNewRecipeHandler} 
                  homePage = {this.showHomePageHandler}
                  showRecipes = {this.showRecipesHandler} 
                  showone = {this.showOneRecipeHandler}/>
          
          <Rigthbox
                    oneRecipe = {this.state.recipes[this.state.showOne]}
                    submit = {this.submitRecipeHandler} 
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
