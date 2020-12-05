import React from "react";

function Cards(props) {
  return (
    <>
      <div className="card border-info mb-3">
        <div className="card-header">{props.header}</div>
        <div className="card-body text-info">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text"> {props.body}</p>
        </div>
      </div>
    </>
  );
}

export default Cards;
