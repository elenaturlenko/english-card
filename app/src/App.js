import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.scss';
import Header from './componets/Header/Header.jsx';
import Footer from './componets/Footer/Footer.jsx';
import Error from './componets/Error/Error.jsx';
import CardContainer from './componets/CardContainer/CardContainer.jsx';
import WordsList from './componets/WordsList/WordsList.jsx';

function App() {
  return (
    <Router>
      <div className="App">
      <main className="main">
            <Header />
            <Routes>
              <Route exact path="/logo" element={<WordsList/>} />
              <Route exact path="/wordsList" element={<WordsList/>} />
              <Route exact path="/game" element={<CardContainer/>} />
              <Route path="/" element={<WordsList/>} />
              <Route path="*" element={<Error/>} />
            </Routes>
        </main>
        <Footer className="footer" />
      </div>
    </Router>
  );
}

export default App;
