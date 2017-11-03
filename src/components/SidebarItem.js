import React, { Component } from 'react';
import '../css/Sidebar.css'
import FontAwesome from 'react-fontawesome';

export class SidebarItem extends Component {
	render() {
		return (
			<li className={this.props.active ? 'sidebar-item active': 'sidebar-item'} onClick={this.props.onClick}>
				<a href="#">
					<FontAwesome className="sidebar-icon" name={this.props.icon} /><span className="sidebar-text">{this.props.name}</span>
				</a>
			</li>
		);
	}
}