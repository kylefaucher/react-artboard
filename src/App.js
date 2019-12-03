import React, {Component} from 'react';
import Controls from './Controls.js';
import Artboard from './Artboard.js';

class App extends Component{
  constructor(props){
    super(props);
  }

  render(){

    return(
      <div>

        <Controls />

        <Artboard />

      </div>
      );
  }
}

export default App;