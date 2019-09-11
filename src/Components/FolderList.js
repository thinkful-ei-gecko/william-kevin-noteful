import React, { Component } from 'react';
import FolderItem from './FolderItem'

export default class FolderList extends Component {
  render() {
    const folderItems = this.props.folders.map(folder => <FolderItem folder={folder} />);
    return (
      <li className="sidebar__folder-list">
        {folderItems}
      </li>
    )
  }
}