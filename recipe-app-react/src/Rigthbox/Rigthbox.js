import React from 'react';
import styles from './Rigthbox.module.css';
import Intro from '../Intro/Intro';
import Recipe from './Recipe';



const rightbox = (props) => {
    let show = <Intro/>
    
    if (props.show){
        show = props.recipes.map((recipe) =>
        <li>{recipe.name}</li>)
    }

    return(
       //show
       <div>

       
       <Recipe/>
       
       </div>
    )
}


export default rightbox;