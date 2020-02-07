import React from "react";

function Game(props) {
  return <div className="wrapper container row">{props.children}</div>
}

export default Game;