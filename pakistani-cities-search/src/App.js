import React, {Component} from 'react';
import Box from './Title/Box';
import './App.css';
import Cities from './Components/Cities';
import { tsPropertySignature, throwStatement } from '@babel/types';


//getting the Pakistan Cities data from the json file
var data = require('./pk.json');
var cities = [];
var i = 0
for (i = 0; i < data.length ; i++) {
    cities.push({name: data[i]['city'], id : i + 2})
}

//Component => Initial Heading
const Heading = () => {
  return(
    <h1 className = 'heading'>Search for the Pakistani Cities:</h1>
  )
}

//Component => Input Search Box
const Input = ( props ) => {
  return(
    <div className = 'search'>
        <input className = 'search' type = 'text' placeholder = 'Enter name of city' onChange = {props.name}/>
    </div>
  ) 
}


//Main App class
class App extends Component {
  //state has two cities array -> (i) all cities and (ii) searched cities
  state = {
    //cities format = [{name:'xyz', id = '123'}  ...]
    cities : cities.slice(),
    name : '',
    searchedCities : []
  }

  // get name from the input and search it in the list of cities
  getNameHanlder = (event) => {
    
    this.setState({name: event.target.value});
    //creating the array for the search cities
    var citiesName = []
    
    for (var i = 0; i < this.state.cities.length; i++){
      //the following line convert the ith name to lower case and matches ths substring in it from event.target value
      if (this.state.cities[i]['name'].toLowerCase().includes(event.target.value.toLowerCase())){
        citiesName.push(this.state.cities[i]['name']);
      }
      else continue
    }
    this.setState({searchedCities : citiesName})
    
  }



  render(){
    return (
      //final content of the app
      <div className="App">
        <Box/>
        <Heading/>
        <Input name = {this.getNameHanlder}/>
        <Cities 
           names = {this.state.cities} 
           search = {this.state.name} 
           searchCities = {this.state.searchedCities} />
      </div>
    );
  }
  }
  

export default App;
