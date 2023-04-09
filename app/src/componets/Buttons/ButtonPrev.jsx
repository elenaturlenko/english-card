import React from "react";
import "./ButtonPrev.scss";

function ButtonPrev(props) {
    return <button className="btn-prev" onClick={props.onClick}>Previous</button>;
}

export default ButtonPrev;