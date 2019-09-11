import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Sidebar from "./Components/Sidebar";
import FolderList from './Components/FolderList';
import FolderItem from './Components/FolderItem';
import NoteList from './Components/NoteList';
import NoteItem from './Components/NoteItem';
import NotFound from './Components/NotFound';

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
          <Switch>
            <Route exact path="/" component={FolderList} />
            <Route path="/folder/:folderId" component={FolderItem} />
            <Route component={NotFound} />
          </Switch>
        </Sidebar>
        <Main>
          <Switch>
            <Route exact path="/" component={NoteList} />
            <Route path="/note/:noteId" component={NoteItem} />
            <Route component={NotFound} />
          </Switch>
        </Main>
      </div>
    );
  }
}
