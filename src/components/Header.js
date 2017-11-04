import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Row } from 'reactstrap';
import '../css/Header.css';

export class Header extends Component {
	constructor(props) {
    	super(props);

    	this.toggle = this.toggle.bind(this);
    	this.state = {
      		isOpen: false
    	};
  	}
  	toggle() {
    	this.setState({
      		isOpen: !this.state.isOpen
    	});
  	}
  	render() {
  		return (
		    <div className="navbar-abiq">
  				<Container fluid>
				    <Navbar color="faded" dark expand="md">
			      		<NavbarBrand href="/">
			      			<Row>
			      				<img className="navbar-brand" src={require('../img/logo.png')} alt="logo"/>
			      			</Row>
			      			<Row>
			      				<h1 className="page-title">Home</h1>
			      				<h2 className="page-subtitle">Test</h2>
			      			</Row>
			      		</NavbarBrand>
				        <Nav className="ml-auto">
			          		<NavItem className="navbar-item">
				            	<NavLink className="header-link" active href="/components/">Profile</NavLink>
				          	</NavItem>
			          		<NavItem className="navbar-item">
				            	<NavLink className="header-link" href="/components/">Register</NavLink>
				          	</NavItem>
				          	<NavItem className="navbar-item">
			            		<NavLink className="header-link" href="https://github.com/reactstrap/reactstrap">Login</NavLink>
				          	</NavItem>
				          	<NavItem className="navbar-item">
				          		<NavLink className="header-link" href="https://github.com/reactstrap/reactstrap">
	            		        	<img className="img-profile" src={require('../img/me.jpg')} alt="profile"/>
	            		        </NavLink>
				          	</NavItem>
				        </Nav>
				    </Navbar>
				</Container>
			</div>
	  	)
  	}
}