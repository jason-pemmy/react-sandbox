import React, { Component } from 'react';
import '../css/about.min.css';

class About extends Component {
	render() {
		return (
			<div className="about-container">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1>{this.props.match.params.color}</h1>                            
                            
                        </div>
                    </div>
                </div>                
            </div>  
		);
	}
}

export default About; 