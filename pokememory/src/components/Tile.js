import React from "react";

function Tile(props) {
    return (
        <div className="col s12 m6 l3" id={props.name}>
            <img
                className="responsive-img z-depth-2 hoverable"
                src={props.img}
                onClick={() => props.handleClick(props.id)}    
            />
        </div>
    )
}

export default Tile;