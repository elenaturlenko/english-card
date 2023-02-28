import React from "react";
import "./Input.scss";

function InputForWord(props) {
    const {value} = this.props;
    return (
        <input className="addWord" placeholder="Enter">
        {value}
        </input>
    );
}

export default InputForWord;