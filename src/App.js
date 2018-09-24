import React, { Component } from 'react';
import './App.css';
import Navbar from './component/navbar'
import FormField from './component/FormField'
import CoolButton from './component/CoolButton'

class App extends Component {
  constructor(props){
    super(props);
  }






  render() {
    return (
      <div className="App">
        <Navbar/>
        <FormField/>
      </div>
    );
  }
}

export default App;
