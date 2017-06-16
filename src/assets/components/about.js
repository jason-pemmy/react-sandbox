import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {TimelineMax} from "gsap";
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

    handleTileClick(tileID, tiles) {
        console.log("click: "+ tileID);
        var tl = new TimelineMax();
        tl.fromTo(this.state.tile, .3, {opacity: 1, scale:1}, {opacity: 0, scale:0, delay: 0.1 * this.props.id});
    }

    render() { 
        const style = {backgroundImage: "url("+this.props.imgUrl+")"};
        const tiles = [];
        tiles.push(this.state.node);

        var tl = new TimelineMax();
        tl.fromTo(this.state.node, .3, {opacity: 0, scale:0}, {opacity: 1, scale:1, delay: 0.1 * this.props.id});
        
        return(
            <div className="tile-container" onClick={() => this.handleTileClick(this.props.id, tiles)}>
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
                id={data.id}
                numObs={20}
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