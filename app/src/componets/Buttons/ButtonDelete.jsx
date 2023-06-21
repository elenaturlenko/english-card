import React from "react";
import "./ButtonDelete.scss";

function ButtonDelete(props) {
  return (
    <button className="btn" onClick={props.onClick}>
      Delete
    </button>
  );
}

export default ButtonDelete;