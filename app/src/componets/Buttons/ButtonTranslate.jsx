import React, { useState, useEffect, useRef } from 'react';
import "./ButtonTranslate.scss";

function ButtonTranslate(props) {
    const {russian} = props;
    const [pressed, setPressed] = useState(false)

    const handleChange = () => {
        setPressed(!pressed);
    };

    const buttonTranslateRef = useRef();

    useEffect(() => buttonTranslateRef.current.focus(), []);

    return !pressed ? (
        <button ref={buttonTranslateRef} className="button" onClick={handleChange}>Проверить</button>)
        : (<div onClick={handleChange}>{russian}</div>
    );
}

export default ButtonTranslate;