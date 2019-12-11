import React, {Component} from 'react';
import Controls from './Controls.js';
import Artboard from './Artboard.js';

class App extends Component{
    constructor(props){
        super(props);
        this.itemID = 0;
        this.state = {
            currentColor: '',
            currentTool: '',
            shapes: [
               { shape: 'rect',  fill: 'cyan', x: 10, y: 10, width: 100, height: 100, id: -2},
               { shape: 'rect',  fill: 'violet', x: 10, y: 10, width: 100, height: 100, id: -1}
            ]
        };
  }
      
    addItem = (event, shape) => {
        this.itemID = this.itemID + 1;
        const newShape = Object.assign([], this.state.shapes)
        newShape.push({
            shape: shape,
            fill: 'blue',
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

  render(){

    return(
      <div>
        <h1>ART BOARD</h1>
        <Controls addItem={this.addItem}/>
        <Artboard shapes={this.state.shapes}/>
      </div>
      );
  }
}

export default App;
