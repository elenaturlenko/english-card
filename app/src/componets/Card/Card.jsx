import React from 'react';
import ButtonTranslate from '../Buttons/ButtonTranslate.jsx';
import './Card.scss';

function Card(props) {
  const {
    // eslint-disable-next-line react/prop-types
    word, translation, transcription, isTranslationShown, onClick,
  } = props;
  return (
    <div className="card">
      <div className="card__body body-card">
        <div className="body-card__word">{word}</div>
        <div className="body-card__transcription">{transcription}</div>
        <div className="body-card__translation">
          <ButtonTranslate
            russian={translation}
            onClick={onClick}
            pressed={isTranslationShown} />
        </div>
      </div>
    </div>
  );
}

export default Card;
