import React from "react";
import ButtonTranslate from "../Buttons/ButtonTranslate";
import "./Card.scss";

const Card = ({
  word,
  translation,
  transcription,
  isTranslationShown,
  onClick,
}) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-word">{word}</div>
        <div className="card-transcription">{transcription}</div>
        <div className="card-translation">
          <ButtonTranslate
            russian={translation}
            onClick={onClick}
            pressed={isTranslationShown}
          />
        </div>
      </div>
      </div>
  );
};

export default Card;