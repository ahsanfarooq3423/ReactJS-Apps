import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import AnalyticsApp from './containers/AnalyticsApp/AnayticsApp';


class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <Layout>
          <AnalyticsApp/>
        </Layout>
      </BrowserRouter>
    )
  }
}



export default App;
