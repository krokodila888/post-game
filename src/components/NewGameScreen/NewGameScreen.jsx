import React, { useEffect, useState } from "react";
import logo from '../../images/logo.png';
import fone from '../../images/fone.jpg';
import { facts } from '../../utils/constants';
import './NewGameScreen.css';

function NewGameScreen() {

  return (
    <>
      <main className="main__content">
        <>
          <img src={logo} alt="Странный логотип игры" className="main__logo"/>
        </>
      
      </main>
    </>
  );
}  

export default NewGameScreen;
