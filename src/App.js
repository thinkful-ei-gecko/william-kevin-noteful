import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Sidebar from "./Components/Sidebar";
import FolderList from './Components/FolderList';
import FolderItem from './Components/FolderItem';
import NoteList from './Components/NoteList';
import NoteItem from './Components/NoteItem';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      store: props.store
    };
  }

  render() {
    // console.log(this.state.store);
    return (
      <div className="app">
        <Header />
        <Sidebar>
          <Route path="/" component={FolderList} />
          <Route path="/folder/:folderId" component={FolderItem} />
        </Sidebar>
        <Main>
          <Route path="/" component={NoteList} />
          <Route path="/note/:noteId" component={NoteItem} />
        </Main>
      </div>
    );
  }
}
