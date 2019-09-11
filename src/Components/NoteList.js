import React, { Component } from 'react'

export default class NoteList extends Component {
    render() {
        return (
            <li className="note-item">
                <span>Note 1</span>
                <span>Date modified on 3rd Jan 2019</span>
                <button type="button">Delete Note</button>
            </li>
        )
    }
}
