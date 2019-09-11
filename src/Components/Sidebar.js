import React, { Component } from 'react';
import FolderList from './FolderList';
import FolderItem from './FolderItem';


export default class Sidebar extends Component {
    render() {
        return (
           <ul className="sidebar">
               <FolderList 
                  store={this.props.store}
                />
               <FolderItem 
                 store={this.props.store}
               />
           </ul>
        )
    }
}
