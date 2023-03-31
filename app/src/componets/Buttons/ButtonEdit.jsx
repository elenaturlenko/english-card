import React from "react";
import "./ButtonEdit.scss";

function ButtonEdit(props) {
  const {onClick, pressed} = props;
    return (
      <button onClick={onClick} className="btn-edit">
        {pressed === true ? "Cancel" : "Edit"}
      </button>
    );
}

export default ButtonEdit;