import React, { FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import logo from '../../images/logo1.png';
import './Header.css';

type THeaderProps = {
  goNext: (arg0: string) => void;
};

const Header: FC<THeaderProps> = ({ goNext }) => {
  function handleClick() {
    goNext('main');
  }

  return (
    <>
      <header className="header">
        <img
          src={logo}
          alt="Странный логотип игры"
          className="header__logo"
          onClick={handleClick}
        />

        <h1 className="header__title">Андерстад. Новый фронтир</h1>
        <h2 className="header__subtitle">
          Отличная игра из романтики, приключений и текста
        </h2>
      </header>
    </>
  );
};

export default Header;
