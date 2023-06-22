import React, { useState } from 'react';
import ButtonDelete from '../Buttons/ButtonDelete.jsx';
import ButtonEdit from '../Buttons/ButtonEdit.jsx';
import ButtonSave from '../Buttons/ButtonSave.jsx';
import './TableRow.scss';
// eslint-disable-next-line import/order
import { observer, inject } from 'mobx-react';

const TableRow = inject(['dataStore'])(
  observer(({ dataStore, ...props }) => {
    const [pressed, setPressed] = useState(false);

    const [inputData, setInputData] = useState({
      id: props.id,
      word: props.word,
      transcription: props.transcription,
      translation: props.translation,
    });

    const [errors, setErrors] = useState({
      word: false,
      transcription: false,
      translation: false,
    });

    const handleChange = () => {
      setPressed(!pressed);
    };

    const addInputData = (event) => {
      setInputData({
        ...inputData,
        [event.target.name]: event.target.value,
      });
    };

    const { word, transcription, translation } = inputData;

    const onlyLatinCharacters = (value) => /^[a-zA-Z]+$/.test(value);

    const onlyRussianCharacters = (value) => /^[\u0400-\u04FF]+$/.test(value);

    const handleSave = () => {
      if (!onlyLatinCharacters(inputData.word)) {
        setErrors({ ...errors, word: 'Введите слово на английском языке' });
        // eslint-disable-next-line no-alert
        alert('Некоторые поля заполнены неправильно!');
      } else if (!onlyRussianCharacters(inputData.translation)) {
        setErrors({ ...errors, translation: 'Введите слово на русском языке' });
        // eslint-disable-next-line no-alert
        alert('Некоторые поля заполнены неправильно!');
      } else {
        dataStore.updateWord(inputData, props.id);
        setErrors({
          word: false,
          transcription: false,
          translation: false,
        });
        handleChange();
      }
    };

    const handleDelete = () => dataStore.deleteWord(props.id);

    return (
      <tr className="row" key={props.id}>
        {pressed === true ? (
          <>
            <td className="td">
              <input
                className="td__input"
                type="text"
                value={word}
                onChange={(e) => addInputData(e)}
                name="word"
              />
            </td>
            <td>
              <input
                className="td__input"
                type="text"
                value={transcription}
                onChange={(e) => addInputData(e)}
                name="transcription"
              />
            </td>
            <td>
              <input
                className="td__input"
                type="text"
                value={translation}
                onChange={(e) => addInputData(e)}
                name="translation"
              />
            </td>
          </>
        ) : (
          <>
            <td className="td__word" onClick={handleChange}>
              {inputData.word}
            </td>
            <td className="td__word" onClick={handleChange}>
              {inputData.transcription}
            </td>
            <td className="td__word" onClick={handleChange}>
              {inputData.translation}
            </td>
          </>
        )}
        <td>
          <div className="row__buttons">
          <ButtonEdit onClick={handleChange} pressed={pressed} />
            {pressed === true ? <ButtonSave onClick={handleSave} /> : ''}
            <ButtonDelete onClick={() => handleDelete(props.id)} />
          </div>
        </td>
      </tr>
    );
  }),
);

export default TableRow;
