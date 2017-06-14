import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Equalizer from 'react-equalizer';
import {TweenMax} from "gsap";
import '../css/promise.min.css';

class Tile extends Component { 

    componentDidMount() {
        var node = ReactDOM.findDOMNode(this);        
        TweenMax.fromTo(node, 1, {opacity: 0}, {opacity: 1}, 0.5)
    }

    render() {
        const listItems = this.props.tileData.slice(0,16).map((data) =>         
            <div className="col-md-2 col-sm-3 col-xs-6" key={data.id}>
                <div className="tile">            
                    <img src={data.thumbnailUrl} alt=""/>
                    <p>{data.title}</p>                        
                </div>
            </div>                
        );    
            
        return (
            <div className="tile-container">
                <Equalizer>{listItems}</Equalizer>  
            </div>
        );
    }
}

class Promise extends Component { 
    constructor(props) {
        super(props);

        this.state = { 
            data: [] 
        }
    }

    loadData() {
        fetch('https://jsonplaceholder.typicode.com/photos/')
			.then(response => response.json())
			.then(data => {
				this.setState({data: data })
		    })
			.catch(err => console.error(this.props.url, err.toString()));	    
    }

    componentDidMount() {
		console.log("component initialized");
        this.loadData();
	}   

    render() {
        const tileData = this.state.data;

        return(
            <div className="promise-container">                
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1>Promises</h1> 
                            <Tile className="tile-container" tileData={tileData}></Tile>
                        </div>
                    </div>
                </div>                
            </div>
        );
    }
}

export default Promise;