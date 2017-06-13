import React, { Component } from 'react';
import '../css/home.min.css';

function TileContainer(props) {
	if(props.tileName === "cool-btn"){
		return <p>Cool Btn clicked</p>;
	} else {
		return <p>Cool Btn not clicked</p>;
	}	
}

class Home extends Component {	
	constructor(props) {
		super(props);
		this.setName = this.setName.bind(this);
		this.checkLogin = this.checkLogin.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
		this.handleLogout = this.handleLogout.bind(this);
		this.state = {
			tileName: "",
			isLoggedIn: false,
			firstLoad: true
		}	
	}

	setName(e) {
		this.setState({tileName: e.target.name});
	}

	//lifecycle hook
	componentDidMount() {
		console.log("component initialized");
	}

	//lifecycle hook
	componentWillUnmount() {
		console.log("component cleaned up");
	}

	handleLogin() {
		this.setState({isLoggedIn: true});	
	}

	handleLogout() {
		this.setState({isLoggedIn: false});
	}

	checkLogin() {		
		this.state.firstLoad ? this.setState({firstLoad: false}) : this.setState({firstLoad: true});
	}
	
	render() {
		const tileName = this.state.tileName;
		const isLoggedIn = this.state.isLoggedIn;		
		const isFirstLoad = this.state.firstLoad;
		const numbers = [1,2,3,4,5];
		const listItems = numbers.map((number) => 
			<li key={number.toString()}>{number}</li>
		);

		let button = null;

		if(isFirstLoad) {
			button = null;			
		}else if(!isFirstLoad && !isLoggedIn){			
			button = <button onClick={this.handleLogin}>Login</button>
		}else {
			button = <button onClick={this.handleLogout}>Logout</button>
		}

		return (
			<div className="home-container">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<div className="">
								<h1>Home</h1>
								<TileContainer tileName={tileName}></TileContainer>
							</div>
						</div>	
					</div>
					<div className="row">
						<div className="col-sm-12">
							<p>
								<button name="cool-btn" onClick={this.setName}>Click me</button>
								<button name="" onClick={this.checkLogin}>Logged in?</button>
							</p>							
							{button}
						</div>
					</div>					
					<div className="row">
						<div className="col-sm-12">
							<div className="">
								<ul>{listItems}</ul>
							</div>
						</div>	
					</div>
				</div>                
            </div>   
		);
	}
}

export default Home; 