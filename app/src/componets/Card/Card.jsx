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
      <div className="card-body">
        <div className="card-word">{word}</div>
        <div className="card-transcription">{transcription}</div>
        <div className="card-translation">
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
