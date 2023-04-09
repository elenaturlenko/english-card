import React from "react";
import "./ButtonNext.scss";

function ButtonNext(props) {
    return <button className="btn-next" onClick={props.onClick}>Next</button>;
}

export default ButtonNext;