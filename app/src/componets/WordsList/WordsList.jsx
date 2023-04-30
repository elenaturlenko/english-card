import React from "react";
import TableRow from "./TableRow";
import "./WordsList.scss";
import words from "../../data/data.json"


function WordsList() {
    return (
        <div className="main_table">
          <table className="table">
            <caption className="table-name">Words List</caption>
            <thead>
              <tr>
                <th>Word</th>
                <th>Transcription</th>
                <th>Translate</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
            {words.map((word) => (
            <TableRow
              key={word.id}
              word={word.english}
              transcription={word.transcription}
              translation={word.russian}
            />
          ))}
            </tbody>
          </table>
        </div>
      );
};
export default WordsList;