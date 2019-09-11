import React, { Component } from 'react'

export default class NoteItem extends Component {
    render() {
      const { id, name, modified, folderId, content } = this.props.note;
        return (
            <div className="main__note-item" key={id}>
                <span>{name}</span>
                <span>{modified}</span>
                <button type="button">Delete Note</button>
            </div>
        )
    }
}