import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';
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
			      		<NavbarBrand href="/">Abiq</NavbarBrand>
				      	<NavbarToggler onClick={this.toggle} />
				      	<Collapse isOpen={this.state.isOpen} navbar>
					        <Nav className="ml-auto" pills>
				          		<NavItem>
					            	<NavLink active href="/components/">Components</NavLink>
					          	</NavItem>
					          	<NavItem>
				            		<NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
					          	</NavItem>
					        </Nav>
				      	</Collapse>
				    </Navbar>
				</Container>
			</div>
	  	)
  	}
}