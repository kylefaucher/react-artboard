import React, {Component} from 'react';
import {Layer, Rect, Stage} from 'react-konva';

class Artboard extends Component{
  constructor(props){
    super(props);
  }

  render(){

    return(
      <div>

	      <Stage width={700} height={700}>
	        <Layer>
	            <Rect
	                x={10} y={10} width={50} height={50}
	                fill={'blue'}
	                shadowBlur={10}
	            />
	        </Layer>
	      </Stage>

      </div>
      );
  }
}

export default Artboard;