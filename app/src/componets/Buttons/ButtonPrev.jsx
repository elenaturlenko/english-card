import React from "react";
import "./ButtonPrev.scss";

function ButtonPrev(props) {
    const {disabled, onClick} = props;
    return (
        <button 
            className= {disabled ? "disabled" : "btn-prev"}
            onClick={onClick}
            >
            Previous
        </button >
    );
}

export default ButtonPrev;