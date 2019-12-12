import React from "react";
import Konva from "konva";
import { Line, Transformer } from "react-konva";

/*not functional*/

const Line1 = ({ shapeProps, isSelected, onSelect, onChange }) => {
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
            <Line
                x={20}
                y={200}
                points={[5, 70, 140, 23, 250, 60, 300, 20]}
                tension={0.5}
                closed
                stroke="black"
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
                onDragStart={e => {
                    e.target.setAttrs({
                        shadowOffset: {
                            x: 15,
                            y: 15
                        },
                        scaleX: 1.1,
                        scaleY: 1.1
                    });
                }}
                draggable
                onTransformEnd={e => {
                    // transformer is changing scale
                    const node = shapeRef.current;
                    const scaleX = node.scaleX();
                    const scaleY = node.scaleY();
                    node.scaleX(1);
                    node.scaleY(1);
                    onChange({
                        ...shapeProps,
                        x: node.x(),
                        y: node.y(),
                        width: node.width() * scaleX,
                        height: node.height() * scaleY,
                    });
                }}
            />
            {isSelected && <Transformer ref={trRef} />}
        </React.Fragment>
    );
// })}
};
export default Line1;
