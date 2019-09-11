import React, { Component } from 'react'

export default class NoteDetailedView extends Component {
    render() {
        const { id, name, modified, folderId, content } = this.props.note;
        return (
            <div className="main__note-detailed-view" key={id}>
            <span>{name}</span>
            <span>{modified}</span>
            <button type="button">Delete Note</button>
            <p>{content}</p>
        </div>
        )
    }
}