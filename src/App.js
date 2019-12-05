import React, {Component} from 'react';
import Controls from './Controls.js';
import Artboard from './Artboard.js';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      currentColor: '',
      currentTool: ''
    };
  }

  render(){

    return(
      <div>
        <h1>ART BOARD</h1>
        <Controls />
        <Artboard />

      </div>
      );
  }
}

export default App;
