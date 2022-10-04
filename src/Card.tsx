import "./Card.css";
import React from "react";

function Card(props: any) {
  return (
    <div className="card-container">
      <div className="row">
        <div className={"row-item " + props.symbol}></div>
        <div className="row-item no-left-margin">
          <div className="column">
            <div className={"column-item " + props.color}>{props.title}</div>
            <div className="column-item">{props.detail}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
