import React, { Component } from 'react'

export default class FolderItem extends Component {
    render() {
        return (
            <div className="folder-item" >
                <button type="button">{this.props.folder.name}</button>
            </div>
        )
    }
}