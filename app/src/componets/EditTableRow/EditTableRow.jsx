import React, { useState } from 'react';
import './EditTableRow.scss';
import { observer, inject } from 'mobx-react';
import ButtonDelete from '../Buttons/ButtonDelete.jsx';
import ButtonAdd from '../Buttons/ButtonAdd.jsx';

const EditableRow = inject(['dataStore'])(
  observer(({ dataStore }) => {
    const [inputData, setInputData] = useState({
      word: '',
      transcription: '',
      translation: '',
    });

    const [errors, setErrors] = useState({
      word: false,
      transcription: false,
      translation: false,
    });

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
        dataStore.addNewWord(inputData).then(() => {
          setInputData({
            word: ' ',
            translation: ' ',
            transcription: ' ',
          });
        });
      }
    };

    const validate = () => {
      // eslint-disable-next-line no-shadow
      const { word, transcription, translation } = inputData;
      return word.trim() && transcription.trim() && translation.trim();
    };

    return (
      <tr className="rowAddWord">
        <td>
          <input
            placeholder="Enter"
            type="text"
            value={word}
            onChange={(e) => addInputData(e)}
            name="word"
            className={word.length ? 'rowAddWord__addWord' : 'rowAddWord_addWord-red'}
          />
        </td>
        <td>
          <input
            placeholder="Enter"
            type="text"
            value={transcription}
            onChange={(e) => addInputData(e)}
            name="transcription"
            className={transcription.length ? 'rowAddWord__addWord' : 'rowAddWord_addWord-red'}
          />
        </td>
        <td>
          <input
            placeholder="Enter"
            type="text"
            value={translation}
            onChange={(e) => addInputData(e)}
            name="translation"
            className={translation.length ? 'rowAddWord__addWord' : 'rowAddWord_addWord-red'}
          />
        </td>
        <td>
          <div className="rowAddWord__buttons">
            <ButtonAdd disabled={!validate()} save={handleSave} />
            <ButtonDelete />
          </div>
        </td>
      </tr>
    );
  }),
);

export default EditableRow;
