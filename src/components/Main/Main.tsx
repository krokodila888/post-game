import React, { FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import pic1 from '../../images/main1.jpg';
import pic2 from '../../images/main2.jpg';
import pic3 from '../../images/main3.jpg';
import pic4 from '../../images/main4.jpg';
import pic5 from '../../images/main5.jpg';
import fone from '../../images/fone.jpg';
import start from '../../audio/start.mp3';
import pub from '../../audio/pub.mp3';
import { facts } from '../../utils/constants';
import './Main.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import NewGameScreen from '../NewGameScreen/NewGameScreen';
import GameScreen from '../GameScreen/GameScreen';
import Prologue from '../Prologue/Prologue';
import ResumeGameScreen from '../ResumeGameScreen/ResumeGameScreen';
import {
  clearUser,
} from '../../services/actions/user';

const Main: FC = () => {
  const { userName } = useSelector((state: any) => state.userReducer);
  const [pic, setPic] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [fact, setFact] = useState(
    'Магистраль - восстановленная ветка железной дороги, проходящая от границ Эйсланда до запада Территорий'
  );
  const [screen, setScreen] = useState('main');
  const [music, setMusic] = useState([start, start]);
  const [musicOn, setMusicOn] = useState(false);
  const [backFromGame, setBackFromGame] = useState(false);
  const pubAudio = React.useRef<any>();
  const startAudio = React.useRef<any>();
  const dispatch = useDispatch();
  const mainImageRef = React.useRef<any>();

  useEffect(() => {
    const timer = setInterval(() => {
      setFact(facts[Math.floor(Math.random() * (facts.length - 1))]);
    }, 12000);
    return () => clearInterval(timer);
  }, [fact]);

  //логика смены музыки
  useEffect(() => {
    if (screen === 'game' && musicOn) {
      console.log('sound on pub!');
      soundOnPub();
    }
    if (screen === 'main' && musicOn && backFromGame) {
      soundOnMain();
    }
    if (screen === 'prologue' && musicOn && backFromGame) {
      soundOnMain();
    }
    if (screen === 'newGame' && musicOn && backFromGame) {
      soundOnMain();
    }
  }, [screen]);

  function soundOn() {
    console.log('start sound');
    setMusicOn(true);
    if (screen === 'main') {
      soundOnMain();
    }
    if (screen === 'newGame') {
      soundOnMain();
    }
    if (screen === 'prologue') {
      soundOnMain();
    }
    if (screen === 'game') {
      soundOnPub();
    }
  }

  function soundOff() {
    console.log('stop sound');
    setMusicOn(false);
    startAudio.current.pause();
    pubAudio.current.pause();
  }

  function soundOnPub() {
    pubAudio.current.play();
  }

  function soundOnMain() {
    startAudio.current.play();
  }

  function goNext(x: string) {
    if (screen === 'game') {
      setBackFromGame(true);
      pubAudio.current.pause();
    }
    if (screen !== 'game') {
      setBackFromGame(false);
      pubAudio.current.pause();
    }
    if (x === 'game') {
      startAudio.current.pause();
    }
    setScreen(x);
  }

  //очищение localStorage для тестов
  function clear() {
    localStorage.clear();
    dispatch(clearUser());
    console.log(localStorage);
  }

  //тут смена картинки
  const images = [pic1, pic2, pic3, pic4, pic5, pic1];

  useEffect(() => {
    if (screen === 'main') {
    const timer = setInterval(() => {
      if (pic < 5) {
        setIsVisible(!isVisible);
        setPic(pic + 1);
      }
      if (pic === 5) {
        setIsVisible(!isVisible);
        setPic(1);
      }
    }, 10000);
    return () => {
      clearInterval(timer);
    };
  }
  }, [pic, screen]);

  useEffect(() => {
    console.log('isVisible ' + isVisible);
  }, [pic, isVisible]);

  return (
    <>
      <Header goNext={goNext} />
      {screen === 'main' && (
        <main className="main__content">
          <img src={fone} alt="Серый фон" className="main__fone" />
          {isVisible &&
            <img
              src={images[pic]}
              alt="Пейзажи постапокалиптического города"
              className='main__pic main__pic1'
            />
          }
          {!isVisible &&    
            <img
              src={images[pic]}
              alt="Пейзажи постапокалиптического города"
              className='main__pic main__pic2'
            />
          }
          <div className="main__fact-block">
            <p>{fact}</p>
          </div>
          <nav className="main__button-block">
            <button
              className="button"
              onClick={(e) => {
                goNext('prologue');
              }}
            >
              Пролог
              <span className="main__button-first span"></span>
              <span className="main__button-second span"></span>
              <span className="main__button-third span"></span>
              <span className="main__button-fourth span"></span>
            </button>
            <button
              className="button"
              onClick={(e) => {
                goNext('newGame');
              }}
            >
              Новая игра
              <span className="main__button-first span"></span>
              <span className="main__button-second span"></span>
              <span className="main__button-third span"></span>
              <span className="main__button-fourth span"></span>
            </button>
            <button
              className="button"
              onClick={(e) => {
                goNext('resume');
              }}
            >
              Продолжить игру
              <span className="main__button-first span"></span>
              <span className="main__button-second span"></span>
              <span className="main__button-third span"></span>
              <span className="main__button-fourth span"></span>
            </button>
            {userName !== null ? (
              <p className="main__greetingText">
                Привет, {userName}! Давно тебя не видели.
              </p>
            ) : (
              <p className="main__greetingText">Ну здравствуй, гость!</p>
            )}
          </nav>
        </main>
      )}
      {screen === 'newGame' && (
        <NewGameScreen goNext={goNext} screen={screen} />
      )}
      {screen === 'game' && (
        <GameScreen
          goNext={goNext}
          screen={screen}
          /*setMusicOn={setMusicOn}*/
        />
      )}
      {screen === 'prologue' && <Prologue goNext={goNext} screen={screen} />}
      {screen === 'resume' && (
        <ResumeGameScreen goNext={goNext} screen={screen} />
      )}
      <>
        <audio ref={pubAudio} src={pub} /*type='audio'*/ loop />
        <audio ref={startAudio} src={start} /*type='audio'*/ loop />
      </>
      <Footer 
        musicOn={musicOn} 
        soundOn={soundOn} 
        soundOff={soundOff} />
    </>
  );
};

export default Main;

//<button onClick={clear}>Обнулить</button>
