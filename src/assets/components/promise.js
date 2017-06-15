import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Equalizer from 'react-equalizer';
import {TweenMax} from "gsap";
import '../css/promise.min.css';

class Tile extends Component { 
    constructor(props) {
        super(props);
        this.state = {node: {}}
    }

    componentDidMount() {
        var node = ReactDOM.findDOMNode(this);
        this.setState({node: node});
    }

    render() {        
        this.props.showTile ? TweenMax.to(this.state.node, 1, {opacity: 0}) : TweenMax.to(this.state.node, 1, {opacity: 1});

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
        this.doShowTile = this.doShowTile.bind(this);

        this.state = { 
            data: [],
            showTile: false 
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

    doShowTile() {
        this.state.showTile ? this.setState({showTile: false}) : this.setState({showTile: true});        
    }   

    render() {
        const tileData = this.state.data;
        const showTile = this.state.showTile;
        //console.log("****--"+ showTile);

        return(
            <div className="promise-container">                
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1>Promises</h1>
                            <p><button onClick={this.doShowTile}>Toggle Tile</button></p> 
                            <Tile 
                                className="tile-container" 
                                tileData={tileData} 
                                showTile={showTile}></Tile>
                        </div>
                    </div>
                </div>                
            </div>
        );
    }
}

export default Promise;