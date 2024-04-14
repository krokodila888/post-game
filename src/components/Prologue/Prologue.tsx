import React, { FC, useEffect, useState } from 'react';
import fone from '../../images/fone.jpg';
import prologue1 from '../../images/prologue1.jpg';
import skip from '../../images/skip-white.png';
import './Prologue.css';
import { useSelector, useDispatch } from 'react-redux';
import { prologue } from '../../utils/constants';

type TPrologueProps = {
  goNext: (arg0: string) => void;
  screen: string;
};

const Prologue: FC<TPrologueProps> = ({ goNext, screen }) => {
  const dispatch = useDispatch();

  const [count, setCount] = useState(0);
  const [turn, setTurn] = useState(0);
  const [cadr, setCadr] = useState({
    pic: prologue1,
    text: 'Говорят, Предки жили лучше нас. В их домах всегда было тепло и сухо - и никаких крыс...',
  });
  const [styles, setStyles] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setCount(prologue.length);
  }, []);

  useEffect(() => {
    console.log(turn);
    console.log(count);
  }, [count, turn]);

  useEffect(() => {

    const timer = setInterval(() => {
      if (screen === 'prologue' && turn < count) {
        setIsVisible(!isVisible);
        setCadr(prologue[turn]);
        setTurn(turn + 1);
        //setIsVisible(!isVisible);
      }
      if (turn === count) {
        clearInterval(timer);
      }
    }, 6000);
    return () => clearInterval(timer);
  }, [count, turn, screen]);

  function skip1() {
    if (turn < count) {
      setTurn(turn + 1);
      setCadr(prologue[turn]);
      setIsVisible(!isVisible);
    } else {
      goNext('main');
    }
  }

  useEffect(() => {
    console.log('isVisible ' + isVisible);
  }, [isVisible]);

  return (
    <>
      <main className="prologue__content">
        <img src={fone} alt="Серый фон" className="prologue__fone" />
        {isVisible &&
        <img
          src={cadr.pic}
          alt="Пейзажи постапокалиптического города"
          className='prologue__pic prologue__pic1'
        />
        }
        {!isVisible &&    
        <img
          src={cadr.pic}
          alt="Пейзажи постапокалиптического города"
          className='prologue__pic prologue__pic2'
      />}
        <p className="prologue__text">{cadr.text}</p>
        <img src={skip} onClick={skip1} className="prologue__skip" />
      </main>
    </>
  );
};

export default Prologue;

/*



        <AnimatePresence mode="wait">
            {isVisible && (
              <motion.img
                src={cadr.pic}
                alt="Пейзажи постапокалиптического города"
                className="prologue__pic"
                animate={{
                  transform: 'scale(1) translateX(0px) translateY(-50px)',
                  opacity: 1,
                }}
                initial={{ opacity: 0, top: 0, transform: 'scale(1.3) translateY(0px) translateX(50px)' }}
                transition={{ delay: 0.3, ease: 'easeOut', duration: 5.8 }}
                exit={{
                  opacity: 0,
                  transition: { ease: 'linear', duration: 3 },
                }}
              />
            )}
          </AnimatePresence>
          <AnimatePresence mode="wait">
            {!isVisible && (
              <motion.img
                src={cadr.pic}
                alt="Пейзажи постапокалиптического города"
                className="prologue__pic prologue__pic_indexed"
                animate={{
                  transform: 'scale(1.3) translateY(-50px)',
                  opacity: 1,
                }}
                initial={{ opacity: 0, top: 0, transform: 'scale(1) translateY(0px)'  }}
                transition={{ delay: 0.3, ease: 'easeOut', duration: 5.8 }}
                exit={{
                  opacity: 0,
                  transition: { ease: 'linear', duration: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
        */
