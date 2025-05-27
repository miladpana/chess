import React, {useState} from 'react';
import Place from "./Place.jsx";
import Piece from "./Piece.jsx";
import {DndContext} from "@dnd-kit/core";
import {pos, fileToNum} from "../utils/helper.js";

const Board = ({ranks, files}) => {

    const [positions, setPositions] = useState(pos());
    const positionsCopy = [...positions];
    const positionsLog = [...positions].reverse();
    console.log(positionsLog);


    return (

        <div className="board bg-cover w-[34rem] h-[34rem] grid grid-cols-8 bg-stone-300">
            <DndContext onDragEnd={handleDragEnd}>
                {ranks.map((rank, x) => files.map((file, y) =>
                    <Place key={`${rank}${file}`} place={`${rank}${file}`}>
                        <Piece place={`${rank}${file}`} piece={`${positions[7 - x][y]}`}/>
                    </Place>
                ))}
            </DndContext>
        </div>

    );

    function handleDragEnd({active, over}) {
        if (active.id.split('-')[1] === over.id) return;
        console.log(active.id, over.id);
        positionsCopy[Number(over.id[0] - 1)][fileToNum(over.id[1])] = active.id.split('-')[0];
        positionsCopy[Number(active.id.split('-')[1][0]) - 1][fileToNum(active.id.split('-')[1][1])] = " ";
        setPositions(positionsCopy);
    }
    
};

export default Board;