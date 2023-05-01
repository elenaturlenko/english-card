import React from "react";
import "./ButtonNext.scss";

function ButtonNext(props) {
    const {disabled, onClick} = props;
    return (
        
        <button
            className={disabled ? "disabled" : "btn-next"}
            onClick={onClick}
            >
            Next
            </button>
    );
}

export default ButtonNext;