import React, {Component} from 'react';
import Layout from './components/Layout/Layout';
import GroceryApp from './containers/GroceryApp/GroceryApp';
import { BrowserRouter } from 'react-router-dom';

//GroceryApp the main application

class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <div>
          <Layout>
            <GroceryApp/>
          </Layout>
        </div>
      </BrowserRouter>
    )
  }
}
export default App;
