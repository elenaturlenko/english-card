import React, {useState, useEffect} from "react";
import Card from "../Card/Card";
import ButtonNext from "../Buttons/ButtonNext";
import ButtonPrev from "../Buttons/ButtonPrev";
import words from "../../data/data.json";

function CardContainer(props) {
    const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  
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

  
    useEffect(() => {
      console.log(words.length);
    }, []);
  
    return (
      <div className="cardContainer">
        <div className="oneCard">
          <ButtonPrev onClick={handleClickPrev} />
          <Card
            word={words[selectedCardIndex].english}
            transcription={words[selectedCardIndex].transcription}
            translation={words[selectedCardIndex].russian}
          ></Card>
          <ButtonNext onClick={handleClickNext} />
        </div>
        <span className="numberCard">
          {selectedCardIndex + 1}/{words.length}
        </span>
      </div>
    );
  }
  
  export default CardContainer;