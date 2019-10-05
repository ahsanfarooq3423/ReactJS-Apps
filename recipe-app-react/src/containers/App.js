import React, {Component} from 'react';
import styles from './App.module.css';
import Leftbox from '../components/Leftbox/Leftbox';
import Rigthbox from '../components/Rigthbox/Rigthbox';





class App extends Component {
  state = {
    recipes: [
      {name: 'Burger', ingredients: 'Lorem impus', id : '1jsa'},
      {name: 'Chinese', ingredients: 'Lorem impus', id : 'sdw'},
      {name: 'Pizza', ingredients: 'Lorem kia impus', id : 'swesdf'}
            ],
      showOne : 0,
      editIndex : undefined,
      showRecipes : false,
      recipeStatus : '',
      name : '',
      ingredient : '',
      editFlag : false,
      editName : null,
      editIngredient : null
      
  }

  showHomePageHandler = () => {
    this.setState({showRecipes : false})
    this.setState({recipeStatus : ''})
  }

  addNewRecipeHandler = () => {
    this.setState({recipeStatus : 'addnew'})
    
  }

  showRecipesHandler = () => {
    if (this.state.recipes.length == 0){
      this.setState({recipeStatus : ''})
    }
    else{
      this.setState({recipeStatus : 'showall'})
    }
    
     
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
      recipes.push(
        {name: this.state.name, 
        ingredients: this.state.ingredient, 
        id : Math.random().toString()+ 'asw'})
      
    }
    else {
      alert("Recipe Cannot be Empty")
      this.setState({recipeStatus : ''})
    }
    if (this.state.name.length !== 0 && this.state.ingredient.length !==  0){
      this.setState({recipes : recipes, name : ''
      , ingredient : ''
      , recipeStatus: 'showall'
      })
    }
    
    

  }

  showOneRecipeHandler = (event) => {
    this.setState({recipeStatus : 'showone'})
    const recipe_name = event.target.innerText;
    const recipes = [...this.state.recipes]
    
    for (var i = 0; i < recipes.length; i++) {
      if (recipes[i].name === recipe_name){
        this.setState({showOne : i, editFlag : false})
      }

    }

  }

  editFlagHandler = (event) => {
    const flag = this.state.editFlag;
    this.setState({editFlag : !flag})
    const recipe_name = event.target.value
    const recipes = [...this.state.recipes]
    for (var i = 0; i < recipes.length; i++) {
      if (recipes[i].name === recipe_name){
        this.setState({editIndex : i,recipeStatus : 'showone'})
        break
      }
    }
    
  }

  editNameHandler = (event) => {
      const editName = event.target.value;
      this.setState({editName : editName})   
  }

  editIngredientHandler = (event) => {
      const editIngredient = event.target.value;
      this.setState({editIngredient : editIngredient}) 
  }


  submitEditRecipeHandler = () => {
    let recipes = [...this.state.recipes]
    if (this.state.editName.length != 0 && this.state.editIngredient.length != 0){
      recipes[this.state.editIndex].name = this.state.editName
      recipes[this.state.editIndex].ingredients = this.state.editIngredient
    }
    else {
      this.setState({editFlag : true})
    }
    this.setState({recipes : recipes, recipeStatus : 'showone', editFlag : false})
  
  }

  removeAllRecipes = () => {
    this.setState({recipes: [], recipeStatus : '' })
  }

  deleteRecipeHandler = (event) => {
    let recipes = [...this.state.recipes]
    const recipe_name = event.target.value
    for (var i = 0; i < recipes.length; i++) {
      if (recipes[i].name === recipe_name){
        
        if (i > -1) {
        recipes.splice(i, 1);}
        this.setState({recipes : recipes,recipeStatus : 'showall'})
        break
      }
    }
    
  }
  
  

  render(){
    return (
      <div className={styles.App}>
          <Leftbox 
                  removeAll = {this.removeAllRecipes}
                  recipes = {this.state.recipes}
                  addNew = {this.addNewRecipeHandler} 
                  homePage = {this.showHomePageHandler}
                  showRecipes = {this.showRecipesHandler} 
                  showone = {this.showOneRecipeHandler}/>
          
          <Rigthbox
                    deleteRecipe = {this.deleteRecipeHandler}
                    homePage = {this.showHomePageHandler}
                    submitEdit = {this.submitEditRecipeHandler}
                    editIngredient = {this.editIngredientHandler}
                    editName = {this.editNameHandler}
                    editRecipe = {this.editFlagHandler}
                    editFlag = {this.state.editFlag}
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
