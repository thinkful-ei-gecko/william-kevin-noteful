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
            <Route exact path="/"
              render={() =>
                <FolderList store={this.state.store} />
              }
            />
            <Route path="/folder/:folderId"
              render={() =>
                <FolderItem store={this.state.store} />
              }
            />
            <Route component={NotFound} />
          </Switch>
        </Sidebar>
        <Main>
          <Switch>
            <Route exact path="/"
              render={() =>
                <NoteList store={this.state.store} />
              }
            />
            <Route path="/note/:noteId"
              render={() =>
                <NoteItem store={this.state.store} />
              }
            />
            <Route component={NotFound} />
          </Switch>
        </Main>
      </div>
    );
  }
}
