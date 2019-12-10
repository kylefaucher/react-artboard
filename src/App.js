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
                {shape: '', color: '', positionX: '', positionY: '', id: ''}
            ]
        };
  }
      
    addItem = (event, shape) => {
        this.itemID = this.itemID + 1;
        const newShape = Object.assign([], this.state.shapes)
        newShape.push({
            shape: this.state.shape,
            color: 'blue',
            positionX: 0,
            positionY: 0,
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
