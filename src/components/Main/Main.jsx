import React, { useEffect, useState } from "react";
import pic1 from '../../images/main1.jpg';
import pic2 from '../../images/main2.jpg';
import pic3 from '../../images/main3.jpg';
import pic4 from '../../images/main4.jpg';
import pic5 from '../../images/main5.jpg';
import logo from '../../images/logo.png';
import fone from '../../images/fone.jpg';
import { facts } from '../../utils/constants';
import './Main.css';

function Main() {

  const [pic, setPic] = useState(1);
  const [fact, setFact] = useState('Магистраль - восстановленная ветка железной дороги, проходящая от границ Эйсланда до запада Территорий');

  useEffect(() => {
    const timer = setInterval(() => {
      if (pic < 5) setPic(pic + 1);
      if (pic === 5) setPic(1);
    }, 12000);
    return () => clearInterval(timer);
  }, [pic]);

  useEffect(() => {
    const timer = setInterval(() => {
      setFact(facts[Math.floor(Math.random() * (facts.length - 1))]);
      /*console.log(fact + (facts.length - 1))*/
    }, 9000);
    return () => clearInterval(timer);
  }, [fact]);

  return (
    <>
      <main className="main__content">
        <>
          <img src={logo} alt="Странный логотип игры" className="main__logo"/>
        </>
        <h1 className="main__title">(Пост)постапокалипсис</h1>
        <h2 className="main__subtitle">Отличная игра из романтики, приключений и текста</h2>
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
        <div className="main__button-block">
          <button className="button">
            Пролог
            <span className="main__button-first span"></span>
            <span className="main__button-second span"></span>
            <span className="main__button-third span"></span>
            <span className="main__button-fourth span"></span>
          </button>
          <button className="button">
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
        </div>
      </main>
    </>
  );
}  

export default Main;
