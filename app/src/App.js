import React from "react";
import words from "./componets/data/data.json"
import "./App.scss";
import Header from "./componets/Header/Header"
import Footer from "./componets/Footer/Footer"
import Card from "./componets/Card/Card";
import ButtonPrev from "./componets/Buttons/ButtonPrev"
import ButtonNext from "./componets/Buttons/ButtonNext"
import WordsList from "./componets/WordsList/WordsList"

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="App-main">
        <ButtonPrev/>
        {
        words.map((word)=>
          <Card key={word.id} word={word.english} transcription={word.transcription} translation={word.russian}></Card>
          )
        }
        <ButtonNext/>
      </div>
      <WordsList className="table" />
      <Footer/>
    </div>
  );
}

export default App;
