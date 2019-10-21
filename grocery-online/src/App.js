import React, {Component} from 'react';
import Layout from './components/Layout/Layout';
import GroceryApp from './containers/GroceryApp/GroceryApp';


//GroceryApp the main application

class App extends Component {
  render(){
    return(
      <div>
        <Layout>
          <GroceryApp/>
        </Layout>
      </div>
    )
  }
}
export default App;
