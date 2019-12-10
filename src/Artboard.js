import React, {Component} from 'react';
import { render } from 'react-dom';
import {Layer, Rect, Stage, Transformer} from 'react-konva';
import Rectangle from "./Rectangle";


const storeRectangles = [
  // {
  //   x: 10,
  //   y: 10,
  //   width: 100,
  //   height: 100,
  //   fill: 'red',
  //   id: 'rect1'
  // },
  // {
  //   x: 150,
  //   y: 150,
  //   width: 100,
  //   height: 100,
  //   fill: 'green',
  //   id: 'rect2'
  // }
];

function Artboard() {

  const [rectangles, setRectangles] = React.useState([storeRectangles]);
  const [selectedId, selectShape] = React.useState(null);
  
  // constructor(props){
  //   super(props);
  //   this.state = {
  //   	shapes: [
  //   		{shape: 'rectangle', color: 'blue', positionX: '0', positionY: '0'}
  //   	]
  //   };
  // }

    return(
      <div>

	      <Stage className = "stage" width={700} height={700} onMouseDown={e => {
        // deselect when clicked on empty area
        const clickedOnEmpty = e.target === e.target.getStage();
        if (clickedOnEmpty) {
          selectShape(null);
        }
      }}>
	        <Layer>
        {rectangles.map((rect, i) => {
          return (
            <Rectangle
              key={i}
              shapeProps={rect}
              isSelected={rect.id === selectedId}
              onSelect={() => {
                selectShape(rect.id);
              }}
              onChange={newAttrs => {
                const rects = rectangles.slice();
                rects[i] = newAttrs;
                setRectangles(rects);
              }}
            />
          );
        })}
      </Layer>
	      </Stage>

      </div>
      );
  }

export default Artboard;