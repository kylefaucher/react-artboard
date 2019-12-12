import React from "react";
import Konva from "konva";
import { Circle, Transformer } from "react-konva";

/* react konva docs: https://konvajs.org/docs/react/index.html */

/* useEffect tells React that your component needs to do something after render */
/* detect if the shape is selected and then draw a handle for the shape so it can be resized and moved */
const Circle1 = ({ shapeProps, isSelected, onSelect, onChange }) => {
    const shapeRef = React.useRef();
    const trRef = React.useRef();

    React.useEffect(() => {
        if (isSelected) {
            trRef.current.setNode(shapeRef.current);
            trRef.current.getLayer().batchDraw();
        }
    }, [isSelected]);

    return (
        <React.Fragment>
            <Circle
                onClick={onSelect}
                ref={shapeRef}
                {...shapeProps}
                /* scales back to normal to show that drag has ended */
                onDragEnd={e => {
                    e.target.to({
                        duration: 0.5,
                        easing: Konva.Easings.ElasticEaseOut,
                        scaleX: 1,
                        scaleY: 1,
                        shadowOffsetX: 0,
                        shadowOffsetY: 0
                    });
                }}
                /* scales up slightly to make it more obvious that user is dragging it */
                onDragStart={e => {
                    e.target.setAttrs({
                        scaleX: 1.1,
                        scaleY: 1.1
                    });
                }}
                draggable /* makes shape draggable */
                /* https://konvajs.org/docs/react/Transformer.html */
                onTransformEnd={e => {
                    /* transformer is changing scale */
                    const node = shapeRef.current;
                    const scaleX = node.scaleX();
                    const scaleY = node.scaleY();
                    node.scaleX(1);
                    node.scaleY(1);
                    onChange({
                        ...shapeProps,
                        x: node.x(),
                        y: node.y(),
                        width: node.width() * scaleX, /* update width accordingly with scale */
                        height: node.height() * scaleY, /* update height accordingly with scale */
                    });
                }}
            />
            {/* creates the Transformer Konva object where you change the size of a shape when you selected */}
            {isSelected && <Transformer ref={trRef} />}
        </React.Fragment>
    );
// })}
};
export default Circle1;
