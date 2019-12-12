import React, {Component} from 'react';
import Controls from './Controls.js';
import Artboard from './Artboard.js';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { CirclePicker } from 'react-color';
import { Layer, Rect, Transformer } from "react-konva";
import { faLongArrowAltRight, faSquareFull, faPlay, faCircle, faPen, faSlash, faFont, faImage } from '@fortawesome/free-solid-svg-icons';
import Rectangle from "./shapes/Rectangle";

class App extends Component{
    constructor(props) {
        super(props);
        this.itemID = 0;
        this.state = {
            currentColor: '#f44336',
            currentTool: '',
            shapes: [
                {shape: 'rect', fill: 'violet', x: 10, y: 10, width: 100, height: 100, id: -1}
            ]
        };
        this.handleColorChange = this.handleColorChange.bind(this);
    }

    addItem = (event, shape) => {
        this.itemID = this.itemID + 1;
        const newShape = Object.assign([], this.state.shapes)
        newShape.push({
            shape: shape,
            fill: this.state.currentColor,
            x: 100,
            y: 100,
            width: 10,
            height: 10,
            id: this.itemID
        });
        /*if((shape === 'rect')||(shape === 'circle')){
            newShape.push({
                shape: shape,
                x: 100,
                y: 100,
                width: 10,
                height: 10,
                fill: this.state.currentColor,
                id: this.itemID
            });
        }else if(shape === 'arrow'){
            newShape.push({
                shape: shape,
                x: 500,
                y: 80,
                points: [0, 0, 100, 100],
                pointerLength: 20,
                pointerWidth: 20,
                fill: this.state.currentColor,
                stroke: this.state.currentColor,
                strokeWidth: 4,
                id: this.itemID
            });
        }else if (shape === 'line'){
            newShape.push({
                shape: shape,
                x: 300,
                y: 100,
                points: [0, 0, 100, 100],
                stroke: this.state.currentColor,
                strokeWidth: 4,
                id: this.itemID
            });
        }*/
        this.setState(
            {shapes:newShape}
        )
    };
    handleColorChange(color, event) {
        this.setState({currentColor: color.hex});
    }

    render(){
        return(
            <div>
                <h1>ARTBOARD</h1>
                {/* <Controls addItem={this.addItem} handleColorChange = {this.handleColorChange} color = {this.state.currentColor}/> */}
                <Artboard shapes={this.state.shapes} addItem={this.addItem} handleColorChange = {this.handleColorChange} color = {this.state.currentColor}/>
                {console.log(this.state.shapes)}
            </div>
        );
    }
}

export default App;