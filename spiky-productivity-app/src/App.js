import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import BoardsApp from './containers/BoardsApp/BoardsApp';



class App extends Component {
  render(){
    return(
      <BrowserRouter>
              <Layout>
                  <BoardsApp/>
              </Layout>
      </BrowserRouter>
    )
  }
}



export default App;
