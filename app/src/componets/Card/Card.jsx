import React from "react";
import "./Card.scss";



function Card(props) {
    const {word, transcription, translation} = this.props;
    return (
    <div className="card">
        <div className="card-body">
            <div className="card-word">{word}</div>
            <div className="card-transcription">{transcription}</div>
            <div className="card-translation">{translation}</div>
        </div>
    </div>
);
}

export default Card;