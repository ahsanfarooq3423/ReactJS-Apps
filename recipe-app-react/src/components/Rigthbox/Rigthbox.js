import React from 'react';
import Intro from '../Intro/Intro';
import Recipe from './Recipe';
import Addnew from './Addnew';



const rightbox = (props) => {
    let show = <Intro/>
    
    if (props.recipeStatus === 'showall'){
        show = props.recipes.map((recipe) =>
        <Recipe
            deleteRecipe = {props.deleteRecipe}
            editRecipe = {props.editRecipe}
            edit = {props.editFlag}  
            recipe = {recipe} 
            key = {recipe.id} 
            show = {props.show}
            />)
    }
    if (props.recipeStatus === 'addnew') {
        show = <Addnew
                    homePage = {props.homePage} 
                    getname = {props.getname}  
                    getingredient = {props.getingredient}
                    submit = {props.submit}/>
    }
    if (props.recipeStatus === 'showone'){
        
        show = <Recipe
                    deleteRecipe = {props.deleteRecipe}
                    submitEdit = {props.submitEdit}
                    editIngredient = {props.editIngredient}
                    editName ={props.editName}
                    editRecipe = {props.editRecipe}
                    edit = {props.editFlag}
                    recipe = {props.oneRecipe}  
                    show = {props.show}/>
        
    }

    return(
       show
       
    )
}


export default rightbox;