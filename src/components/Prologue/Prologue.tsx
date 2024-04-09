import React, { FC, useEffect, useState } from "react";
import fone from '../../images/fone.jpg';
import prologue1 from '../../images/prologue1.jpg';
import skip from '../../images/skip-white.png';
import './Prologue.css';
import { useSelector, useDispatch } from 'react-redux';
import { prologue } from '../../utils/constants';

type TPrologueProps = {
  goNext: any;
  screen: string;
}

const Prologue: FC<TPrologueProps> = ({ goNext, screen }) => {

  const dispatch = useDispatch();

  const [count, setCount] = useState(0);
  const [turn, setTurn] = useState(0);
  const [cadr, setCadr] = useState({pic: prologue1, text: 'Говорят, Предки жили лучше нас. В их домах всегда было тепло и сухо - и никаких крыс...'});
  const [styles, setStyles] = useState("prologue__pic prologue__pic1");

  useEffect(() => {
    setCount(prologue.length);
  }, []);

  useEffect(() => {
    console.log(turn);
    console.log(count);
  }, [count, turn]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (turn < count) {
        setCadr(prologue[turn]);
        setTurn(turn + 1);
        setStyles(getImgEffect());
      };
      if (turn === count) {
        clearInterval(timer);
      };
    }, 6000);
    return () => clearInterval(timer);
  }, [count, turn]);

  function skip1() {
    if (turn < count) {
      setTurn(turn + 1);
      setCadr(prologue[turn]);
    }
    else {goNext('main')}
  }

  function getImgEffect() {
    let res = Math.floor(Math.random() * (4 - 1) + 1);
    if (res ===  1) return "prologue__pic prologue__pic1";
    if (res === 2) return 'prologue__pic prologue__pic2'; 
    if (res === 3) return 'prologue__pic prologue__pic3' 
    return 'prologue__pic prologue__pic4'
  }

  return (
    <>
      <main className="prologue__content">
        <img src={fone} alt="Серый фон" className="prologue__fone"/>
        <img 
          src={cadr.pic} 
          alt="Пейзажи постапокалиптического города" 
          className={styles}/>
        <p className="prologue__text">
          {cadr.text}
        </p>
        <img src={skip} onClick={skip1} className="prologue__skip"/>
      </main>
    </>
  );
};

export default Prologue;
