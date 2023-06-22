import React from 'react';
import TableRow from '../TableRow/TableRow.jsx';
import './WordsList.scss';
import EditTableRow from '../EditTableRow/EditTableRow.jsx';
// eslint-disable-next-line import/order
import { observer, inject } from 'mobx-react';

const WordsList = inject(['dataStore'])(
  observer(({ dataStore }) => (
      <div className="main_table">
        <table className="table">
          <caption className="table-name">Words List</caption>
          <thead>
            <tr>
              <th className="col"> Word</th>
              <th className="col">Transcription</th>
              <th className="col">Translate</th>
              <th className="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <EditTableRow />
            {dataStore.data.map((word) => (
              <TableRow
                key={word.id}
                id={word.id}
                word={word.english}
                transcription={word.transcription}
                translation={word.russian}
              />
            ))}
          </tbody>
        </table>
      </div>
  )),
);

export default WordsList;
