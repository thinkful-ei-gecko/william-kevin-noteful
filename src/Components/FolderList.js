import React, { Component } from 'react'

export default class FolderList extends Component {
  render() {
    console.log('this.props', this.props)
    return (
      <li className="sidebar__folder-list">
        <button type="button">Folder 1</button>
      </li>
    )
  }
}