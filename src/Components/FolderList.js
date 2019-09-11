import React, { Component } from 'react';
import FolderItem from './FolderItem'

export default class FolderList extends Component {
  render() {
    let folders;
    if (this.props.folderId) {
      folders = this.props.folders.find(folder => {
        return folder.id === this.props.folderId
      })
    }
    // const folderItems = this.props.folders.map(folder => <FolderItem folder={folder} />);
    return (
      <li className="sidebar__folder-list">
        {!folders ? this.props.folders.map(folder => <button>{folder.name}</button>) : <h2>{folders.name}</h2> }
      </li>
    )
  }
}