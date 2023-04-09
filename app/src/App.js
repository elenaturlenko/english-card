import React from "react";
import "./App.scss";
import Header from "./componets/Header/Header";
import Footer from "./componets/Footer/Footer";
import CardContainer from "./componets/CardContainer/CardContainer";
import WordsList from "./componets/WordsList/WordsList";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="App-main">
        <CardContainer/>        
      </div>
      <WordsList className="table" />
      <Footer/>
    </div>
  );
}

export default App;
