import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './AboutMe.css';
import { topics, topicsForRender, partsOfSpeach } from '../../../utils/constants';
import { setCurrentDeck } from '../../../services/actions/currentDeck.js';

function AboutMe() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentDeck } = useSelector(state => state.currentDeckReducer);

  function setDeck(item) {
    dispatch(setCurrentDeck(item));
    navigate(`/topics/${item.enTopic}`);
  };

  return (
    <>
    <section className="aboutMe__content" id="AboutMe">
      <div className='aboutMe__text-block'>
        <div className='aboutMe__column'>
          <div className='aboutMe__column1'>
            <p className="aboutMe__status-text">
            !שלום
            <br/>
              Я Женя, и я учу иврит.
            </p>
            <p className="aboutMe__text">
              А еще я учу JavaScript и хочу, чтобы одно работало на другое (и бонусом - чтобы однажды меня взяли на работу в айти). Будет здорово, если эта штука еще кому-нибудь пригодится.
            </p>
            <p className="aboutMe__text">
              Пока слов немного и по конкретному учебнику для начинающих. С хорошей вероятностью будет пополняться)
            </p>
          </div>
        </div>        
     
      </div>
    </section>
    <section className="decks__main-content" id="Main-decks">
      <div className="decks__content-wrap">
        <div className="decks__item" onClick={() => {setDeck({
          ruTopic: 'Все',
          enTopic: 'All',
        })}}>
          <p className="decks__main-item-text">
            Все слова
          </p>
          <p className="decks__grey-item-text">
            с поиском
          </p>
        </div>

      </div>
    </section>
    </>
  );
}  

export default AboutMe; 
