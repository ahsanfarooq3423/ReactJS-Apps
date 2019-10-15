import React, {Component} from 'react';
import Layout from './components/Layout/Layout';
import GroceryApp from './containers/GroceryApp/GroceryApp';




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
