import React from "react";
import "./App.css";

const SmurfForList = props => {
  return (
    <div className="smurf">
      <div className="smurf-info">
        <h3>{props.name}</h3>
        <strong>{props.height} tall</strong>
        <p>{props.age} smurf years old</p>
      </div>
    </div>
  );
};

export default SmurfForList;
