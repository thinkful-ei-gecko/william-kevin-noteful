import React, { Component } from 'react'
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Sidebar from './Components/Sidebar';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       store: props.store
    }
  }

  
  

  render() {
    // console.log(this.state.store);
    return (
      <div className="app">
        <Header />
        <Sidebar 
          store={this.state.store}
        />
        <Main 
          store={this.state.store}
        />
      </div>
    )
  }
}