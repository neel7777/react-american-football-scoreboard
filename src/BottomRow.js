import React, { useState } from "react";
import "./App.css";

const BottomRow = () => {
  const next1 = 1;
  const [next, setNext] = useState(next1);
  
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">3</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{next}</div>
      </div>
      <div className="setQuarter">
          <button className = "first" onClick = {() => {setNext(next+1);}}>Next Quarter</button>
          <button onClick = {() => {setNext(1)}}>New Game</button>
      </div>
    </div>
  );
};

export default BottomRow;
