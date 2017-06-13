import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';

import Header from './assets/components/header';
import Home from './assets/components/home';
import About from './assets/components/about';
import Promise from './assets/components/promise';
//import Footer from './assets/components/footer';

import './assets/css/vendors/bootstrap.min.css';
import './assets/css/base.min.css'; 

class App extends Component {  	
	render() {		
		return (
			<Router>
				<div className="App">
					<Header ref={ (header) => this.yoYouHere(this.header = header)} />
					<Route exact path="/" component={Promise} />
					<Route exact path="/home" component={Home} />
					<Route exact path="/about/:color" component={About} /> 					
				</div> 				
			</Router> 
		);		
	}

	yoYouHere(header) {
		console.log("Hey man: "+  header.someFunct() );
	}

}

export default App;
