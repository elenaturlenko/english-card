import React from "react";
import words from "../data/data.json"
import "./WordsList.scss";
import ButtonDelete from "../Buttons/ButtonDelete";
import ButtonAdd from "../Buttons/ButtonAdd";
import ButtonEdit from "../Buttons/ButtonEdit";

function WordsList() {
    return (
        <div className="main_table">
        <table  class="table">
            <caption className="table-name">Words List</caption>
            <thead>
            <tr className="table-tr">
                <th>Word</th>
                <th>Transcription</th>
                <th>Translate</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
    {words.map((word, i) => (
                <tr key={word.id}>
                <td>{i === 0 ? <input value={word.english} /> : word.english}</td>
                <td>
                {i === 0 ? <input value={word.transcription} /> : word.transcription}
                </td>
                <td>
                    {i === 0 ? <input value={word.russian} /> : word.russian}
                </td>
                <td>
                    <div className="buttons">
                    {i === 0 && <ButtonAdd />}
                    <ButtonEdit />
                <ButtonDelete />
                    </div>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
};
export default WordsList;