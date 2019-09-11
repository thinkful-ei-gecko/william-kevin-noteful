import React, { Component } from 'react'

export default class FolderItem extends Component {
  render() {
    const { id, name } = this.props.folder;
    return (
      <div className='sidebar__folder-item'>
        <button type="button">Go back</button>
        <h2>{name}</h2>
      </div>
    )
  }
}
