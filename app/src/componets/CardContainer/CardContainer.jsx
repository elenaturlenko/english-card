import React, {useState, useCallback} from "react";
import Card from "../Card/Card";
import "./CardContainer.scss";
import ButtonNext from "../Buttons/ButtonNext";
import ButtonPrev from "../Buttons/ButtonPrev";
import words from "../../data/data.json";

function CardContainer(props) {
    const [selectedCardIndex, setSelectedCardIndex] = useState(0);
    const [data, updateTranslationState] = useState(words);
    const [wordsCount, setWordsCount] = useState(0);


    const handleClickNext = () => {
      const newIdx = selectedCardIndex + 1;
      if (newIdx < words.length) {
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
      [wordsCount]
    );

    const handleClickTranslation = (isTranslationShown) => {
      const dataCopy = [...data];
      dataCopy[selectedCardIndex].isTranslationShow =
        !dataCopy[selectedCardIndex]?.isTranslationShow;
      updateTranslationState(dataCopy);
      if (!isTranslationShown) {
        addToWords();
      }
    };

    return (
      <main className="cardContainer">
              <span> изучено {wordsCount} слов</span>
        <div className="oneCard">
          <ButtonPrev
            onClick={handleClickPrev}
            disabled={selectedCardIndex === 0} />
          <Card
            word={words[selectedCardIndex].english}
            transcription={words[selectedCardIndex].transcription}
            translation={words[selectedCardIndex].russian}
            onClick={() =>
              handleClickTranslation(data[selectedCardIndex].isTranslationShow)
            }
            isTranslationShown={data[selectedCardIndex].isTranslationShow}
          ></Card>
          <ButtonNext
            onClick={handleClickNext}
            disabled={selectedCardIndex === words.length - 1}/>
        </div>
        <span className="numberCard">
          {selectedCardIndex + 1}/{words.length}
        </span>
      </main>
    );
  }

  export default CardContainer;