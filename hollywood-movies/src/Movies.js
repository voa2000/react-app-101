import React from "react";

export default function Movie(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <img src={props.image} alt={props.title} />
    </div>
  );
}
