import React, { Component } from 'react';
import './App.css';
import { Container } from 'reactstrap';
import { Header } from './components/Header.js';
import { Sidebar } from './components/Sidebar';
import { Content } from './components/Content';

class App extends Component {
  render() {
    return (
    	<div>
			<Header />
	    	<Container fluid>
				<Sidebar />
				<Content />
	    	</Container>
    	</div>
    );
  }
}

export default App;
