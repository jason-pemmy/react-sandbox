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
		this.state = {tileName: ""}	
	}

	setName(e) {
		this.setState({tileName: e.target.name});
	}

	//lifecycle hook
	componentDidMount() {
		console.log("component ready to go");
	}

	//lifecycle hook
	componentWillUnmount() {
		console.log("component cleaned up");
	}
	
	render() {
		const tileName = this.state.tileName;
		return (
			<div className="home-container">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<h1>Home</h1>
							<p><button name="cool-btn" onClick={this.setName}>Click me</button></p>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-12">
							<div className="">
								<TileContainer tileName={tileName}>

								</TileContainer>
							</div>
						</div>	
					</div>
				</div>                
            </div>   
		);
	}
}

export default Home; 