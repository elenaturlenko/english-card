import React from "react";
import ButtonTranslate from "../Buttons/ButtonTranslate";
import "./Card.scss";

function Card(props) {
    const {word, transcription, translation} = props;
    return (
        <div className="card">
            <div className="card-body">
                <div className="card-word">{word}</div>
                <div className="card-transcription">{transcription}</div>
                <div className="card-translation">
                    <ButtonTranslate russian={translation} />
                </div>
            </div>
        </div>
    );
}

export default Card;