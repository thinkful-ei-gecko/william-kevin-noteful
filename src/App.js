import React, { Component } from 'react'
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Sidebar from './Components/Sidebar';

export default class App extends Component {

  render() {
    return (
      <div className="app">
        <Header />
        <Sidebar />
        <Main />
      </div>
    )
  }
}