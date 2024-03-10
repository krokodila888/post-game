import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import logo from '../../images/logo.png';
import './Header.css';

function Header(props) {

  const {goNext} = props;

  function handleClick() {
    console.log(111111);
    goNext('main')
  }

  return (
    <header className="header">
      <img 
        src={logo} 
        alt="Странный логотип игры" 
        className="header__logo"
        onClick={handleClick}
        />
      
      <h1 className="header__title">(Пост)постапокалипсис</h1>
      <h2 className="header__subtitle">Отличная игра из романтики, приключений и текста</h2>
    </header>
  );
}  

export default Header;
