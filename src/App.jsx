import React from "react";
import Board from "./ui/Board";

const App = () => {
    const ranks = [...Array(8).keys()].map((i) => 9 - (i + 1));
    const files = [...Array(8).keys()].map((i) => String.fromCharCode(97 + i));

    return <div className="flex flex-col text-sm font-medium">
        <div className="flex">
            <div className="flex flex-col justify-around w-[1.5rem] text-center">{ranks.map(rank =>
                <div key={String(rank)}>{rank}</div>)}</div>
            <Board ranks={ranks} files={files}/>
        </div>
        <div className="flex h-[1.5rem]">
            <div className="w-[1.5rem]"></div>
            <div className="flex justify-around items-center w-full">{files.map(file => <div
                key={file}>{file}</div>)}</div>
        </div>
    </div>
};

export default App;