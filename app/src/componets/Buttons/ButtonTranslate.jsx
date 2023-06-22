/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react';
import './ButtonTranslate.scss';

function ButtonTranslate(props) {
  const { russian, onClick, pressed } = props;

  const buttonTranslateRef = useRef();

  useEffect(() => buttonTranslateRef.current.focus(), []);

  return !pressed ? (
        <button ref={buttonTranslateRef} className="button" onClick={onClick}>Проверить</button>)
    : (<div onClick={onClick}>{russian}</div>
    );
}

export default ButtonTranslate;
