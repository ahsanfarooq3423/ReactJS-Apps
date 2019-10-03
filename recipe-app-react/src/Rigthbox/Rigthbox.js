import React from 'react';
import Intro from '../Intro/Intro';
import Recipe from './Recipe';
import Addnew from './Addnew';



const rightbox = (props) => {
    let show = <Intro/>
    
    if (props.recipeStatus === 'showall'){
        show = props.recipes.map((recipe) =>
        <Recipe recipe = {recipe} key = {recipe.id} show = {props.show}/>)
    }
    if (props.recipeStatus === 'addnew') {
        show = <Addnew 
                    getname = {props.getname}  
                    getingredient = {props.getingredient}
                    submit = {props.submit}/>
    }
    if (props.recipeStatus === 'showone'){
        console.log(props.oneRecipe)
        show = <Recipe recipe = {props.oneRecipe}  show = {props.show}/>
        
    }

    return(
       show
       
    )
}


export default rightbox;