import React, {Component} from 'react';
import Controls from './Controls.js';
import Artboard from './Artboard.js';

class App extends Component{
    constructor(props){
        super(props);
        this.itemID = 0;
        this.state = {
            currentColor: '#f44336',
            currentTool: '',
            shapes: [
               { shape: 'rect',  fill: 'cyan', x: 10, y: 10, width: 100, height: 100, id: -2},
               { shape: 'rect',  fill: 'violet', x: 10, y: 10, width: 100, height: 100, id: -1}
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
            x: 10,
            y: 10,
            width: 100,
            height: 100,
            id: this.itemID
        })
        this.setState(
            {shapes:newShape}
        )
    }

    handleColorChange(color, event) {
        this.setState({currentColor: color.hex});
    }

  render(){

    return(
      <div>
        <h1>ART BOARD</h1>
        <Controls addItem={this.addItem} handleColorChange = {this.handleColorChange} color = {this.state.currentColor}/>
        <Artboard shapes={this.state.shapes}/>
      </div>
      );
  }
}

export default App;
