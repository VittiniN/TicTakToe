import React from "react";
import Board from "./Board";

function Square(props) {
    return (
    <div> 
        <button className="btn" onClick={()=> props.onClick()}>{props.value} 
        </button>
    </div>
    )
}

export default Square; 