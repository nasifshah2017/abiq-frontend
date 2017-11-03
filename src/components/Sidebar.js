import React, { Component } from 'react';
import '../css/Sidebar.css';
import { SidebarItem } from './SidebarItem.js';

export class Sidebar extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
      		buttonActive: 'home'
    	};

  	}

	handleClick() {

	}
	render() {
		return (
			<div className="sidebar">
	  			<ul className="list-group nav">
	  				<SidebarItem name="Home" icon="home" active={this.state.buttonActive == 'home' ? true : false} onClick={this.handleClick} />
	  				<SidebarItem name="Register" icon="user-plus" active={this.state.buttonActive == 'register' ? true : false} onClick={this.handleClick} />
	  				<SidebarItem name="Login" icon="sign-in" active={this.state.buttonActive == 'login' ? true : false} onClick={this.handleClick} />
	  			</ul>
  			</div>
		);
	}
}