import React from 'react';
import styles from './Rigthbox.module.css';


const recipe = (props) => {
    return(
        <div className = {styles.recipe}>
                <h3>Burger</h3>
                <button>Edit this Page</button>
                <button>Delete this Page</button>
                <br></br>
            
            <hr></hr>
           
                <h3>Ingredients:</h3>
                <p>Lorem Ipsum aske sae fs.</p>
           
        </div>
    )
}

export default recipe;