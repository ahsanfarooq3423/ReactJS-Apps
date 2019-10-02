import React, {Component} from 'react';
import styles from './App.module.css';
import Leftbox from './Leftbox/Leftbox';
import Rigthbox from './Rigthbox/Rigthbox';




class App extends Component {
  state = {
    recipes: [
      {name: 'Burger', ingredients: 'Lorem impus'},
      {name: 'Chinese', ingredients: 'Lorem impus'},
      {name: 'Pizza', ingredients: 'Lorem kia impus'}
            ],
      showAll : true
  }

  render(){
    return (
      <div className={styles.App}>
          <Leftbox/>
          <Rigthbox recipes = {this.state.recipes} show = {this.state.showAll}/>
       
      </div>
    );
  }
  
}

export default App;
