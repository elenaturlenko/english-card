import React, { useState } from "react";
import ButtonDelete from "../Buttons/ButtonDelete";
import ButtonEdit from "../Buttons/ButtonEdit";
import "./TableRow.scss";

function TableRow(props) {
    const {id, word, transcription, translation } = props;
    const [pressed, setPressed] = useState(false);
    const handleChange = () => {
        setPressed(!pressed);
      };
    
      return (
        <tr className="row" key={id}>
          {pressed === true ? (
            <>
              <td>
                <input
                  className="row-input"
                  value={word}
                  onClick={handleChange}
                />
              </td>
              <td>
                <input
                  className="row-input"
                  value={transcription}
                  onClick={handleChange}
                />
              </td>
              <td>
                <input
                  className="row-input"
                  value={translation}
                  onClick={handleChange}
                />
              </td>
            </>
          ) : (
            <>
              <td className="row-word" onClick={handleChange}>
                {word}
              </td>
              <td className="row-word" onClick={handleChange}>
                {transcription}
              </td>
              <td className="row-word" onClick={handleChange}>
                {translation}
              </td>
            </>
          )}

        <td>
          <div className="buttons">
            <ButtonEdit onClick={handleChange} pressed={pressed} />
            <ButtonDelete />
          </div>
        </td>
      </tr>
    );
  }

export default TableRow;
