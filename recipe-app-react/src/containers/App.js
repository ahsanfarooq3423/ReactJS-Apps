import React, {Component} from 'react';
import styles from './App.module.css';
import Leftbox from '../components/Leftbox/Leftbox';
import Rigthbox from '../components/Rigthbox/Rigthbox';





class App extends Component {
  state = {
    //the recipes list 
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

  //show home page
  showHomePageHandler = () => {
    this.setState({showRecipes : false})
    this.setState({recipeStatus : ''})
  }
  //change state to add New
  addNewRecipeHandler = () => {
    this.setState({recipeStatus : 'addnew'})
    
  }
  //change state to show all recipes
  showRecipesHandler = () => {
    if (this.state.recipes.length == 0){
      this.setState({recipeStatus : ''})
    }
    else{
      this.setState({recipeStatus : 'showall'})
    }
    
     
  }
  //get name of the clicked recipe from the recipe component
  getNameHandler = (event) => {
    const name =event.target.value
    this.setState({name : name})
  }
  //get ingredient of the clicked recipe from the recipe component
  getIngredientsHandler = (event) => {
    const ingredient = event.target.value
    this.setState({ingredient : ingredient})
  }


  submitRecipeHandler = () => {
    let recipes = [...this.state.recipes];
    //only if the length of both name and ingredients are greater than 0
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
    //setting back the state to show all after adding the recipes
    if (this.state.name.length !== 0 && this.state.ingredient.length !==  0){
      this.setState({recipes : recipes, name : ''
      , ingredient : ''
      , recipeStatus: 'showall'
      })
    }
    
    

  }
  //rending only one recipe on the screen
  showOneRecipeHandler = (event) => {
    this.setState({recipeStatus : 'showone'})
    const recipe_name = event.target.innerText;
    const recipes = [...this.state.recipes]
    //finding the clicked recipe
    for (var i = 0; i < recipes.length; i++) {
      if (recipes[i].name === recipe_name){
        this.setState({showOne : i, editFlag : false})
      }

    }

  }
  //only edit is the state edit flag is true
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
  //getting the input name data from the event 
  //and storing it in the state temp name variable before submitting
  editNameHandler = (event) => {
      const editName = event.target.value;
      this.setState({editName : editName})   
  }
  //getting the input ingredients data from the event 
  //and storing it in the state temp ingredients variable before submitting
  editIngredientHandler = (event) => {
      const editIngredient = event.target.value;
      this.setState({editIngredient : editIngredient}) 
  }

  //adding the new recipe into the recipes state array
  submitEditRecipeHandler = () => {
    let recipes = [...this.state.recipes]
    if (this.state.editName.length != 0 && this.state.editIngredient.length != 0){
      recipes[this.state.editIndex].name = this.state.editName
      recipes[this.state.editIndex].ingredients = this.state.editIngredient
    }
    else {
      //if name.length and ingredient.length == 0 then dont add but redirect to same edit page
      this.setState({editFlag : true})
    }
    this.setState({recipes : recipes, recipeStatus : 'showone', editFlag : false})
  
  }

  removeAllRecipes = () => {
    this.setState({recipes: [], recipeStatus : '' })
  }
  //delete a particular recipes by getting the name of the recipe from the clicked event
  deleteRecipeHandler = (event) => {
    let recipes = [...this.state.recipes]
    const recipe_name = event.target.value
    //search for the recipe by the recipe_name
    for (var i = 0; i < recipes.length; i++) {
      if (recipes[i].name === recipe_name){
        
        if (i > -1) {
        recipes.splice(i, 1);}
        //changing the state to recieps to showall recipes after removing
        // a particular recipe
        this.setState({recipes : recipes,recipeStatus : 'showall'})
        break
      }
    }
    
  }
  
  

  render(){
    //splitting the container into two sub containers i.e Leftbox and the 
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
