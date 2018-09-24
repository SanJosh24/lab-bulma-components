import React, { Component } from 'react';
import './App.css';
import Navbar from './component/navbar'
import FormField from './component/FormField'
import CoolButton from './component/CoolButton'

class App extends Component {
  constructor(props){
    super(props);
    // this.state = {
    //   name: 'Alex Smith',
    //   email: 'alexsmith@gmail.com'
    // }
  }
  render() {
    return (
      <div className="App">
        <Navbar/>
        <form>
          <FormField label="Name" type="text" placeholder="Alex Smith" />
          <FormField label="Email" type="email" placeholder="Email"/>
          <FormField label="Password" type="password" placeholder="Password"/>
        </form>
      </div>
    );
  }
}

export default App;
