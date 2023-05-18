import React, { useState } from "react";
import ButtonDelete from "../Buttons/ButtonDelete";
import ButtonEdit from "../Buttons/ButtonEdit";
import "./TableRow.scss";

function TableRow(props) {
    const {id, word, transcription, translation } = props;
    const [pressed, setPressed] = useState(false);
    const [inputData, setInputData] = useState({
      word: word,
      transcription: transcription,
      translation: translation,
    });
    const [errors, setErrors] = useState({
      word: false,
      transcription: false,
      translation: false,
    });

    const handleChange = () => {
      setPressed(!pressed);
    };

    const addInputData = (e) => {
      setInputData({
        ...inputData,
        [e.target.name]: e.target.value,
      });
    };

    const onlyLatinCharacters = (value) => {
      return /^[a-zA-Z]+$/.test(value);
    };

    const onlyRussianCharacters = (value) => {
      return /^[\u0400-\u04FF]+$/.test(value);
    };

    const handleSave = () => {
      if (!onlyLatinCharacters(inputData.word)) {
        setErrors({ ...errors, word: "Введите слово на английском языке" });
        alert("Некоторые поля заполнены неправильно!");
      } else if (!onlyRussianCharacters(inputData.translation)) {
        setErrors({ ...errors, translation: "Введите слово на русском языке" });
        alert("Некоторые поля заполнены неправильно!");
      } else {
        console.log(inputData.word);
        console.log(inputData.transcription);
        console.log(inputData.translation);
        setErrors({
          word: false,
          transcription: false,
          translation: false,
        });
        handleChange();
      }
    };

      return (
        <tr className="row" key={id}>
          {pressed === true ? (
            <>
              <td>
                <input
                  className="row-input"
                  type="text"
              value={word}
              onChange={(e) => addInputData(e)}
              name="word"
                />
              </td>
              <td>
                <input
                  className="row-input"
                  type="text"
                  value={transcription}
                  onChange={(e) => addInputData(e)}
                  name="transcription"
                />
              </td>
              <td>
                <input
                  className="row-input"
                  type="text"
              value={translation}
              onChange={(e) => addInputData(e)}
              name="translation"
                />
              </td>
            </>
          ) : (
            <>
              <td className="row-word" onClick={handleChange}>
                {inputData.word}
              </td>
              <td className="row-word" onClick={handleChange}>
                {inputData.transcription}
              </td>
              <td className="row-word" onClick={handleChange}>
                {inputData.translation}
              </td>
            </>
          )}

        <td>
          <div className="buttons">
          <ButtonEdit onClick={handleSave} pressed={pressed} />
            <ButtonDelete />
          </div>
        </td>
      </tr>
    );
  }

export default TableRow;
