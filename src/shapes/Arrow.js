import React from "react";
import Konva from "konva";
import { Arrow, Transformer } from "react-konva";

const Arrow1 = ({ shapeProps, isSelected, onSelect, onChange }) => {
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
            <Arrow
                onClick={onSelect}
                ref={shapeRef}
                {...shapeProps}
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
                        pointerWidth: node.pointerWidth() * scaleX,
                        pointerLength: node.pointerLength() * scaleY,
                    });
                }}
            />
            {isSelected && <Transformer ref={trRef} />}
        </React.Fragment>
    );
// })}
};
export default Arrow1;
