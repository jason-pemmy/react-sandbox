import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {TweenMax} from "gsap";
import '../css/about.min.css';

class FeatureTile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            node: {}
        }        
    }

    componentDidMount() {
        var node = ReactDOM.findDOMNode(this);
        this.setState({node: node});        
    }

    render() { 
        //console.log("===: "+ this.props.imgUrl);
        const style = {backgroundImage: "url("+this.props.imgUrl+")"}
        TweenMax.to(this.state.node, 1, {rotation:360, y:100}, 0.5);
        
        return(
            <div className="tile-container">
                <div className="img-container" style={style}>
                    <div className="img-overlay">
                        <p>{this.props.title}</p> 
                    </div>
                </div>
                
            </div>
        );
    }
}

class ProductFeatureContainer extends Component { 
    constructor() {
        super()
        this.state = {apiData: []}
    }
    
    loadData() {
        fetch("https://jsonplaceholder.typicode.com/photos/")
        .then(response => response.json())
        .then(data => {this.setState({apiData: data})})
        .catch(err => console.error(this.props.url, err.toString()));        
    }

    componentDidMount() {
        this.loadData();
    }

    render() {    
        const tileData = this.state.apiData.slice(0,20).map((data) =>
            <FeatureTile 
                imgUrl={data.url} 
                title={data.title} 
                key={data.id} 
            />
        );

        return(
            <div className="row">
                <div className="col-sm-12">                    
                    <p>ProductFeatureContainer</p>
                    {tileData}                    
                </div>
            </div>
        );
    }
}

class About extends Component {
    getData(data) {
        console.log("data: "+ data);
    }

	render() {    
		return (
			<div className="about-container">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1>{this.props.match.params.color}</h1>
                            <ProductFeatureContainer />
                        </div>
                    </div>
                </div>                
            </div>  
		);
	}
}

export default About;  