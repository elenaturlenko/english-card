import React, { useState } from 'react';
import "./ButtonTranslate.scss";

function ButtonTranslate(props) {
    const {russian} = props;
    const [pressed, setPressed] = useState(false)

    const handleChange = () => {
        setPressed(!pressed);
    };

    return !pressed ? (
        <button className="button" onClick={handleChange}>Проверить</button>) 
        : (<div onClick={handleChange}>{russian}</div>
    );
}

export default ButtonTranslate;