import React, { useState, useCallback } from 'react';
import Card from '../Card/Card.jsx';
import './CardContainer.scss';
import ButtonNext from '../Buttons/ButtonNext.jsx';
import ButtonPrev from '../Buttons/ButtonPrev.jsx';
import Loading from '../Loading/Loading.jsx';
// eslint-disable-next-line import/order
import { observer, inject } from 'mobx-react';

const CardContainer = inject(['dataStore'])(
  observer(({ dataStore }) => {
    const [selectedCardIndex, setSelectedCardIndex] = useState(0);
    const [data, updateTranslationState] = useState(dataStore.data);
    const [wordsCount, setWordsCount] = useState(0);

    const handleClickNext = () => {
      const newIdx = selectedCardIndex + 1;
      if (newIdx < dataStore.data.length) {
        setSelectedCardIndex(newIdx);
      }
    };

    const handleClickPrev = () => {
      const newIndex = selectedCardIndex - 1;
      if (newIndex >= 0) {
        setSelectedCardIndex(newIndex);
      }
    };

    const addToWords = useCallback(
      () => setWordsCount(wordsCount + 1),
      [wordsCount],
    );

    const handleClickTranslation = (isTranslationShown) => {
      const dataCopy = [...data];
      // eslint-disable-next-line max-len
      dataCopy[selectedCardIndex].isTranslationShow = !dataCopy[selectedCardIndex].isTranslationShow;
      updateTranslationState(dataCopy);
      if (!isTranslationShown) {
        addToWords();
      }
    };

    if (!dataStore.data.length) return <Loading />;

    return (
      <div className="cardContainer">
        <span className="wordsCount"> изучено {wordsCount} слов</span>
        <div className="oneCard">
          <ButtonPrev
            onClick={handleClickPrev}
            disabled={selectedCardIndex === 0}
          />
          <Card
            word={dataStore.data[selectedCardIndex].english}
            transcription={dataStore.data[selectedCardIndex].transcription}
            translation={dataStore.data[selectedCardIndex].russian}
            onClick={() => handleClickTranslation(data[selectedCardIndex].isTranslationShow)
            }
            isTranslationShown={data[selectedCardIndex].isTranslationShow}
          ></Card>
          <ButtonNext
            onClick={handleClickNext}
            disabled={selectedCardIndex === dataStore.data.length - 1}
          />
        </div>
        <span className="numberCard">
          {selectedCardIndex + 1}/{dataStore.data.length}
        </span>
      </div>
    );
  }),
);

export default CardContainer;
