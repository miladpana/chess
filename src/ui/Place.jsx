import React from 'react';
import {useDroppable} from "@dnd-kit/core";

const Place = ({children, place}) => {
    const {setNodeRef} = useDroppable({
        id: place,
    });

    return (
        <div className={`w-full h-full`} ref={setNodeRef}>
            {children}
        </div>
    );
};

export default Place;