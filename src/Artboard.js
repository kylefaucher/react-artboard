import React, {Component} from 'react';
import {Layer, Stage, Transformer} from 'react-konva';
import Rectangle from "./shapes/Rectangle";
import Circle1 from "./shapes/Circle";
import Arrow1 from "./shapes/Arrow";
import Line1 from "./shapes/Line";

/*const storeCircles = [
    {
        x: 500,
        y: 300,
        width: 40,
        height: 40,
        fill: 'red',
        id: 'circ1'
    }
];
const storeArrows = [
    {
        x: 500,
        y: 80,
        points: [0, 0, 100, 100],
        pointerLength: 20,
        pointerWidth: 20,
        fill: 'purple',
        stroke: 'purple',
        strokeWidth: 4,
        id: 'arr1'
    }
];
const storeLines = [
    {
        x: 400,
        y: 300,
        points: [0, 0, 100, 100],
        stroke: 'pink',
        strokeWidth: 4,
        id: 'line1'
    }
];*/
const storeRectangles = [{}];
const storeCircles = [{}];
const storeArrows = [{}];
const storeLines = [{}];

function Artboard(props) {
        (props.shapes.map((i) => {
            switch (props.shapes[i]) {
                case (props.shapes[i] === "rect"):
                    storeRectangles.push(props.shapes[i]);
                    break;
                case (props.shapes[i] === "circle"):
                    storeCircles.push(props.shapes[i]);
                    break;
                case (props.shapes[i] === "arrow"):
                    storeArrows.push(props.shapes[i]);
                    break;
                case (props.shapes[i] === "line"):
                    storeLines.push(props.shapes[i]);
                    break;
                default:
                    return "error";
            }
        }));

    const [rectangles, setRectangles] = React.useState(props.shapes);
    const [circles, setCircles] = React.useState(props.shapes);
    const [arrows, setArrows] = React.useState(props.shapes);
    const [lines, setLines] = React.useState(props.shapes);
    const [selectedId, selectShape] = React.useState(null);

    {console.log(storeRectangles)}

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
                                key={rect.id}
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
                    {circles.map((circ, i) => {
                        return (
                            <Circle1
                                key={circ.id}
                                shapeProps={circ}
                                isSelected={circ.id === selectedId}
                                onSelect={() => {
                                    selectShape(circ.id);
                                }}
                                onChange={newAttrs => {
                                    const circs = circles.slice();
                                    circs[i] = newAttrs;
                                    setCircles(circs);
                                }}
                            />
                        );
                    })}
                    {arrows.map((arr, i) => {
                        return (
                            <Arrow1
                                key={arr.id}
                                shapeProps={arr}
                                isSelected={arr.id === selectedId}
                                onSelect={() => {
                                    selectShape(arr.id);
                                }}
                                onChange={newAttrs => {
                                    const arrs = arrows.slice();
                                    arrs[i] = newAttrs;
                                    setArrows(arrs);
                                }}
                            />
                        );
                    })}
                    {lines.map((line, i) => {
                        return (
                            <Line1
                                key={line.id}
                                shapeProps={line}
                                isSelected={line.id === selectedId}
                                onSelect={() => {
                                    selectShape(line.id);
                                }}
                                onChange={newAttrs => {
                                    const lns = lines.slice();
                                    lns[i] = newAttrs;
                                    setLines(lns);
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
