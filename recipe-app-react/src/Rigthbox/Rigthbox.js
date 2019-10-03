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
        show = <Addnew getname = {props.getname} getingredient = {props.getingredient}/>
    }

    return(
       show
       
    )
}


export default rightbox;