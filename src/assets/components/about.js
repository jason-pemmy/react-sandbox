import React, { Component } from 'react';
import '../css/about.min.css';

class FeatureTile extends React.Component {
    render() { 
        console.log("===: "+ this.props.imgUrl);
        const style = {backgroundImage: "url("+this.props.imgUrl+")"};
        
        return(
            <div className="tile-container">
                <div className="img-container" style={style}></div>
                <div className="img-overlay">
                    <p>{this.props.title}</p> 
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
        const tileData = this.state.apiData.slice(0,3).map((data) =>
            <FeatureTile imgUrl={data.url} title={data.title} key={data.id}/>
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