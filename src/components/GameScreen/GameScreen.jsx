import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import fone from '../../images/fone.jpg';
import './GameScreen.css';

function GameScreen() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <main className="game__content">
        <div className="game__menu"></div>
        <img src={fone} alt="Cthsq ajy" className="game__fone"/>
        <p className="game__text">
          Однажды тут будет город-сад.
        </p>
        <p className="game__text1">
        Но пока тут только свист ветра...
        </p>

      </main> : <></>
    </>
  );
}  

export default GameScreen; 
