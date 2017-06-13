import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../css/header.min.css';

class Header extends Component {
	constructor(props){
		super(props);		

		this.color = "Green";
	}

	someFunct(){
		return "yosup";
	}

	render() {		
		return (			
			<div className="header-container">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<div className="logo-container">Logo</div>				
							<ul>
								<li><Link to="/">Promise</Link></li>
								<li><Link to="/home">Home</Link></li>
								<li><Link to={"/about/" + this.color }>About</Link></li>
							</ul> 
						</div>
					</div>
				</div>				
			</div>	
		);
	}
}

export default Header;