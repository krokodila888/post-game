import React, { useEffect, useState } from "react";
import fone from '../../images/fone.jpg';
import './Prologue.css';
import { useSelector, useDispatch } from 'react-redux';
import { setUserName, setUserNick, clearUser } from '../../services/actions/user';

function Prologue(props) {

  const {goNext, screen} = props;
  const dispatch = useDispatch();

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
};

export default Prologue;
