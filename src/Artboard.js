import React, {Component} from 'react';
import { render } from 'react-dom';
import {Layer, Rect, Stage, Transformer} from 'react-konva';
import Rectangle from "./Rectangle";


function Artboard(props) {

  const [rectangles, setRectangles] = React.useState(props.shapes);
  const [selectedId, selectShape] = React.useState(null);

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
