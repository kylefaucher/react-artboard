import React, {Component, useState} from 'react';
import {Layer, Stage, Transformer} from 'react-konva';
import Rectangle from "./shapes/Rectangle";
import Circle1 from "./shapes/Circle";
import Arrow1 from "./shapes/Arrow";
import Line1 from "./shapes/Line";
import Text1 from "./shapes/Text";
import { CirclePicker } from 'react-color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight, faSquareFull, faPlay, faCircle, faPen, faSlash, faFont, faImage } from '@fortawesome/free-solid-svg-icons'

/*react konva docs: https://konvajs.org/docs/react/index.html*/

const storeRectangles = [{}];
const storeCircles = [{}];
const storeArrows = [{}];
const storeLines = [{}];
const storeTexts = [{}];

function Artboard(props) {

    const [rectangles, setRectangles] = React.useState([]);
    const [circles, setCircles] = React.useState([]);
    const [arrows, setArrows] = React.useState([]);
    const [lines, setLines] = React.useState([]);
    const [texts, setTexts] = React.useState([]);
    const [selectedId, selectShape] = React.useState(null);
    const [shapes, setShapes] = useState([]);

    function createRectangle() {
        const rect = {
            x: 100,
            y: 100,
            width: 100,
            height: 100,
            fill: props.color,
            id: `rect${rectangles.length + 1}`,
        };
        const rects = rectangles.concat([rect]);
        setRectangles(rects);
    };

    /* referenced https://medium.com/better-programming/how-to-make-a-whiteboard-app-with-react-konva-8766a532a39f */
    function createCircle() {
        const circ = {
            x: 100,
            y: 100,
            width: 100,
            height: 100,
            fill: props.color,
            id: `circ${circles.length + 1}`,
        };
        const circs = circles.concat([circ]);
        setCircles(circs);
    };

    function createArrow() {
        const arr = {
            x: 100,
            y: 100,
            pointerWidth: 100,
            pointerLength: 100,
            fill: props.color,
            id: `arr${arrows.length + 1}`,
        };
        const arrs = arrows.concat([arr]);
        setArrows(arrs);
    };

    function createLine() {
        const rect = {
            x: 100,
            y: 100,
            width: 10,
            height: 100,
            fill: props.color,
            id: `rect${rectangles.length + 1}`,
        };
        const rects = rectangles.concat([rect]);
        setRectangles(rects);
    };

        function createText() {
            const txt = {
                x: 100,
                y: 100,
                text: 'Sample Text',
                fontSize: 30,
                fontFamily: 'Helvetica',
                fill: props.color,
                id: `txt${texts.length + 1}`,
            };
            const txts = texts.concat([txt]);
            setTexts(txts);
        };


            // const line = {
            //   x: 200,
            //   y: 200,
            //   stroke: props.color,
            //   strokeWidth: 15,
            //   width: 300,
            //   height: 300,
            //   fill: props.color,
            //   id: `line${lines.length + 1}`,
            // };
            // const lns = arrows.concat([line]);
            // setLines(lns);

        return (
            <React.Fragment>
                {/* CONTROLLER */}
                <div>
                    <div className="control">
                        <ul>
                            {/* <li className="control-item"><button><FontAwesomeIcon style = {{color: props.color }} icon={faLongArrowAltRight} onClick={createArrow}/></button></li> */}
                            <li className="control-item">
                                <button><FontAwesomeIcon style={{color: props.color}} icon={faSquareFull}
                                                         onClick={createRectangle}/></button>
                            </li>
                            <li className="control-item">
                                <button><FontAwesomeIcon style={{color: props.color}} icon={faPlay}
                                                         onClick={createArrow}/></button>
                            </li>
                            <li className="control-item">
                                <button><FontAwesomeIcon style={{color: props.color}} icon={faCircle}
                                                         onClick={createCircle}/></button>
                            </li>
                            <li className="control-item">
                                <button><FontAwesomeIcon style={{color: props.color}} icon={faSlash}
                                                         onClick={createLine}/></button>
                            </li>
                            <li className="control-item">
                                <button><FontAwesomeIcon style={{color: props.color}} icon={faFont}
                                                         onClick={createText}/></button>
                            </li>
                            {/* <li className="control-item"><button><FontAwesomeIcon style = {{color: props.color }} icon={faPen} /></button></li>
                    <li className="control-item"><button><FontAwesomeIcon style = {{color: props.color }} icon={faFont} /></button></li>
                    <li className="control-item"><button><FontAwesomeIcon style = {{color: props.color }} icon={faImage} /></button></li> */}
                        </ul>
                        <CirclePicker onChange={props.handleColorChange}/>
                    </div>
                </div>
                {/* ARTBOARD */}
                <div>
                    <Stage className="stage" width={700} height={700} onMouseDown={e => {
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
                            {texts.map((text, i) => {
                                return (
                                    <Text1
                                        key={text.id}
                                        shapeProps={text}
                                        isSelected={text.id === selectedId}
                                        onSelect={() => {
                                            selectShape(text.id);
                                        }}
                                        onChange={newAttrs => {
                                            const txt = texts.slice();
                                            txt[i] = newAttrs;
                                            setTexts(txt);
                                        }}
                                    />
                                );
                            })}
                        </Layer>
                    </Stage>
                </div>
            </React.Fragment>
        );
    }
export default Artboard;
