import React, { Component } from 'react'

export default class NoteItem extends Component {
    render() {
        return (
            <div className="main__note-item">
                <span>Note 1</span>
                <span>Date modified on 3rd Jan 2019</span>
                <button type="button">Delete Note</button>
                <p>ExampleExampleExampleExampleExampleExampleExampleExampleExampleExampleExampleExampleExampleExampleExampleExample</p>
            </div>
        )
    }
}
