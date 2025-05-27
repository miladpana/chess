import React from 'react';
import {useDraggable} from "@dnd-kit/core";

const Piece = ({place, piece}) => {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: `${piece}-${place}`,
    })
    const style = transform ? {
        transform: `translate(${transform.x}px,${transform.y}px)`
    } : undefined;

    return (
        <div className={`w-full h-full  bg-cover ${piece}`} ref={setNodeRef}
             {...attributes} {...listeners} style={style}>

        </div>
    );
};

export default Piece;