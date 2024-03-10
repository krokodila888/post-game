import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import pic1 from '../../images/main1.jpg';
import pic2 from '../../images/main2.jpg';
import pic3 from '../../images/main3.jpg';
import pic4 from '../../images/main4.jpg';
import pic5 from '../../images/main5.jpg';
import logo from '../../images/logo.png';
import fone from '../../images/fone.jpg';
import { facts } from '../../utils/constants';
import './Main.css';
import Header from '../Header/Header.jsx';
import NewGameScreen from '../NewGameScreen/NewGameScreen.jsx';
import GameScreen from '../GameScreen/GameScreen.jsx';
import Prologue from '../Prologue/Prologue.jsx';


function Main() {
  
  const { userName } = useSelector(state => state.userReducer);
  const [pic, setPic] = useState(1);
  const [fact, setFact] = useState('Магистраль - восстановленная ветка железной дороги, проходящая от границ Эйсланда до запада Территорий');
  const [screen, setScreen] = useState('main');
  //another two of them - prologue, game, newGame

  useEffect(() => {
    const timer = setInterval(() => {
      if (pic < 5) setPic(pic + 1);
      if (pic === 5) setPic(1);
    }, 12000);
    return () => clearInterval(timer);
  }, [pic]);

  useEffect(() => {
    console.log(screen)
  }, [screen]);

  useEffect(() => {
    const timer = setInterval(() => {
      setFact(facts[Math.floor(Math.random() * (facts.length - 1))]);
      /*console.log(fact + (facts.length - 1))*/
    }, 9000);
    return () => clearInterval(timer);
  }, [fact]);

  
  function goNext(x) {
    setScreen(x)
  }

  return (
    <>
      <Header
        goNext={goNext}/>
      {(screen === 'main') ?
      <main className="main__content">
        <div className="main__menu"></div>
        <img src={fone} alt="Cthsq ajy" className="main__fone"/>
        {pic === 1 && 
        <>
          <img src={pic1} alt="Пейзажи постапокалиптического города" className="main__pic"/>
        </>
        }
        {pic === 2 && 
        <>
          <img src={pic2} alt="Пейзажи постапокалиптического города" className="main__pic"/>
        </>
        }
        {pic === 3 && 
        <>
          <img src={pic3} alt="Пейзажи постапокалиптического города" className="main__pic"/>
        </>
        }
        {pic === 4 && 
        <>
          <img src={pic4} alt="Пейзажи постапокалиптического города" className="main__pic"/>
        </>
        }
        {pic === 5 && 
        <>
          <img src={pic5} alt="Пейзажи постапокалиптического города" className="main__pic"/>
        </>
        }
        <div className="main__fact-block">
          <p>{fact}</p>
         </div>
        <nav className="main__button-block">
          <button className="button">
            Пролог
            <span className="main__button-first span"></span>
            <span className="main__button-second span"></span>
            <span className="main__button-third span"></span>
            <span className="main__button-fourth span"></span>
          </button>
          <button className="button" onClick={e => {goNext('newGame')}}>
            Новая игра
            <span className="main__button-first span"></span>
            <span className="main__button-second span"></span>
            <span className="main__button-third span"></span>
            <span className="main__button-fourth span"></span>
          </button>
          <button className="button">
            Продолжить игру
            <span className="main__button-first span"></span>
            <span className="main__button-second span"></span>
            <span className="main__button-third span"></span>
            <span className="main__button-fourth span"></span>
          </button>
          {(userName) !== null ? 
          <p className="main__greetingText">Привет, {userName}! Давно не заглядывал.</p>: <p className="main__greetingText">Ну здравствуй, гость!</p>}
        </nav>
      </main> : <></>
      }
      {(screen === 'newGame') ? 
      <NewGameScreen 
        goNext={goNext}
        screen={screen}/> : <></>}
      {(screen === 'game') ? 
      <GameScreen 
        goNext={goNext}
        screen={screen}/> : <></>
      }
      {(screen === 'prologue') ? 
      <Prologue 
        goNext={goNext}
        screen={screen}/> : <></>
      }
    </>
  );
}  

export default Main;
