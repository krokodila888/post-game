import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './GameScreen.css';
import { topics, topicsForRender, partsOfSpeach } from '../../../utils/constants';

function GameScreen() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentDeck } = useSelector(state => state.currentDeckReducer);

  function setDeck(item) {

  };

  return (
    <>
    <section className="aboutMe__content" id="AboutMe">
      <div className='aboutMe__text-block'>
        <div className='aboutMe__column'>
          <div className='aboutMe__column1'>
          </div>
        </div>        
     
      </div>
    </section>
    <section className="decks__main-content" id="Main-decks">
      <div className="decks__content-wrap">
        <div className="decks__item" onClick={() => {setDeck({})}}>
        </div>

      </div>
    </section>
    </>
  );
}  

export default GameScreen; 
