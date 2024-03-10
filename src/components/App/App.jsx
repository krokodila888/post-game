import React, { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main.jsx';
import PageNotFound from '../PageNotFound/PageNotFound.jsx';
//import DeckItemPage from '../DeckItemPage/DeckItemPage.jsx';
//import WordItemPage from '../WordItemPage/WordItemPage.jsx';
//import NumbersTrainPage from '../NumbersTrainPage/NumbersTrainPage.jsx';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//import { vocabulary, topics, verbs } from "../../utils/constants.js";
//import { removeCurrentDeck, setCurrentDeck, setCurrentWord  } from '../../services/actions/currentDeck.js';

function App() {

  //const { currentDeck } = useSelector(state => state.currentDeckReducer);
  //const { currentWord } = useSelector(state => state.currentDeckReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  return (
    <>
      <div className="page">
        <Routes>
          <Route 
            exact path="/" 
            element={
              <Main />
            }>  
          </Route>
          <Route 
            path="*" 
            element={
              <PageNotFound/>
            }>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
