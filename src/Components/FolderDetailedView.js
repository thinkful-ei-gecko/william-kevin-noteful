import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class FolderDetailedView extends Component {
  render() {
    const { id, name } = this.props.folder;
    return (
      <div className='sidebar__folder-detailed-view' key={id}>
        <Link to='/'>
          <button type="button">Go back</button>
        </Link>
        <h2>{name}</h2>
      </div>
    )
  }
}
