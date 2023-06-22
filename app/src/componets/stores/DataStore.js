import { makeAutoObservable } from 'mobx';

class DataStore {
  data = [];

  isLoading = false;

  error = null;

  constructor() {
    makeAutoObservable(this);
    this.loadData();
  }

  loadData = () => {
    fetch('/api/words')
      .then((response) => {
        if (response.ok) {
          // Проверяем что код ответа 200
          return response.json();
        }
        throw new Error('Something went wrong ...');
      })
      // eslint-disable-next-line no-return-assign
      .then((response) => (this.data = response));
  };

  addNewWord = (inputData) => fetch('/api/words/add', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      english: inputData.word,
      russian: inputData.translation,
      transcription: inputData.transcription,
      tags: [],
    }),
  })
    .then((response) => {
      if (response.ok) {
        // Проверяем что код ответа 200
        return response.json();
      }
      throw new Error('Something went wrong ...');
    })
    .then((response) => {
      // eslint-disable-next-line no-console
      console.log(response);
      this.data.push(response);
    });

  deleteWord = (id) => {
    this.isLoading = true;
    fetch(`/api/words/${id}/delete`, {
      method: 'POST',
    })
      .then((response) => {
        if (response.ok) {
          // Проверяем что код ответа 200
          return response.json();
        }
        throw new Error('Something went wrong ...');
      })
      // eslint-disable-next-line no-return-assign
      .then(() => (this.data = this.data.filter((el) => el.id !== id)));
    this.isLoading = false;
  };

  // eslint-disable-next-line class-methods-use-this
  updateWord = (inputData, id) => {
    fetch(`/api/words/${id}/update`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        english: inputData.word,
        russian: inputData.translation,
        transcription: inputData.transcription,
      }),
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Something went wrong ...');
    });

    //   .then((response) => (this.data = response));
  };
}

export default DataStore;
