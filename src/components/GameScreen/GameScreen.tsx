import React, { FC, useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import fone from '../../images/fone.jpg';
import pub from '../../images/pub1.png';
import skip from '../../images/skip.png';
import skip2 from '../../images/skip-white.png';
//import { module1 } from '../../utils/constants';
import figure1 from '../../images/figure1.png';
import figure2 from '../../images/figure2.png';
import figure3 from '../../images/figure3.png';
import figure6 from '../../images/figure6.png';
import figure5 from '../../images/figure5.png';
import bandits from '../../images/bandits.png';
import albert from '../../images/albert.png';
import { TScreen } from '../../utils/types';
import './GameScreen.css';
import { setUserName, setUserNick, setProgress, setTemporaryProgress, clearUser } from '../../services/actions/user';

type TGameProps = {
  goNext: any;
  screen: string;
}

const GameScreen: FC<TGameProps> = ({ goNext, screen }) => {

  //const {screen, setScreen, musicOn, setMusicOn} = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userName, userNick, gameProgress } = useSelector((state: any) => state.userReducer);
  const [count, setCount] = useState(0);
  const [part, setPart] = useState('Пролог. Часть 1');
  const [currentChoise, setCurrentChoise] = useState('');
  const [choise, setChoise] = useState('R1');
  const [cadr, setCadr] = useState<TScreen>({
    turn: 0,
    pic: pub, 
    text1: 'Голова у меня гудит. Вчерашняя пьянка была что надо - жаль, я не слишком хорошо ее помню. Кстати, сейчас полдень или?..', 
    screenType: 'simple',
    figure: null,
  });

  const module1:Array<TScreen> = [
    {
      turn: 1,
      pic: pub, 
      text1: 'Голова у меня гудит. Вчерашняя пьянка была что надо - жаль, я не слишком хорошо ее помню. Кстати, сейчас полдень или?..',
      screenType: 'simple',
      figure: null,
    },
    {
      turn: 2,
      pic: pub, 
      text1: 'Помню мало, хоть убейте. Я в Андерстаде - это дыра на востоке Территорий по пути к Магистрали. Хотелось скрасить вечер, чтоб его...',
      screenType: 'simple',
      figure: null,
    },
    {
      turn: 3,
      pic: pub, 
      text1: 'По крайней мере, пушки при мне. Насчет бумажника сомневаюсь, но вначале надо что-нибудь выпить.',
      screenType: 'simple',
      figure: null,
    },
    {
      turn: 4,
      pic: pub,  
      text1: 'Тут же наливают постояльцам хотя бы воду, правда?..',
      screenType: 'simple',
      figure: null,
    },
    {
      turn: 5,
      pic: pub,  
      text1: `- Эй, это ведь ты ${localStorage.getItem('userNick')}?`,
      text2: 'Боже, кому я нужен?..',
      screenType: 'simple',
      figure: null,
    },
    {
      turn: 6,
      pic: pub,  
      text1: `- Это вас берут проводником, если хотят пройти Костяной перевал без жертв?..`,
      screenType: 'choise',
      button1: {
        text: '- А какой у вас груз? Это недешево.',
        mark: 1
      },
      button2: {
        text: '- Я уже не работаю в тех краях.',
        mark: 2
      },
      button3: {
        text: 'Сделать сложное лицо',
        mark: 3
      },
      figure: {
        url: figure1,
        position: 'game__figure2'
      }
    },
    {
      turn: 7,
      pic: pub,  
      text1: `- Ты ${localStorage.getItem('userNick')}, который возит в Согнберг выпивку под носом у Стражей?`,
      screenType: 'choise',
      button1: {
        text: '- И не только выпивку. И вот кстати...',
        mark: 1
      },
      button2: {
        text: `- Нет, это был другой ${localStorage.getItem('userNick')}.`,
        mark: 2
      },
      button3: {
        text: 'Покоситься в сторону выпивки',
        mark: 3
      },
      figure: {
        url: figure2,
        position: 'game__figure'
      }
    },
    {
      turn: 8,
      pic: pub,  
      text1: `Вот что значит популярность.`,
      text2: `Хоть кто-нибудь здесь принесет мне выпить?..`,
      screenType: 'simple',
      figure: null
    },
    {
      turn: 9,
      pic: pub,  
      text1: `- Это ведь к вам обращаются, если нужно вывезти человека из Новой Алои?..`,
      screenType: 'choise',
      button1: {
        text: '- О таком не говорят с незнакомцами. Но мы можем познакомиться.',
        mark: 1
      },
      button2: {
        text: `- Вы ничего не докажете.`,
        mark: 2
      },
      button3: {
        text: 'Движением брови дать понять, что не намерен отвечать на сухое горло.',
        mark: 3
      },
      figure: {
        url: figure5,
        position: 'game__figure2'
      }
    },
    {
      turn: 10,
      pic: pub,  
      text1: `- А это за твою голову концерн Солано обещает 500 крон и личную благодарность их капо?`,
      screenType: 'choise',
      button1: {
        text: '- 500 крон? Покажите мне идиота, который согласится.',
        mark: 1
      },
      button2: {
        text: `- Им нужен какой-то другой ${localStorage.getItem('userNick')}. Удачи ему.`,
        mark: 2
      },
      button3: {
        text: 'Многозначительно промолчать',
        mark: 3
      },
      figure: {
        url: figure6,
        position: 'game__figure'
      }
    },
    {
      turn: 11,
      pic: pub,  
      text1: `Ну да, я ${localStorage.getItem('userName')} ${localStorage.getItem('userNick')}. Я решаю проблемы.`,
      text2: 'Если вы обо мне не слышали, значит, у вас еще не было проблем.',
      screenType: 'simple',
      figure: null,
    },
    {
      turn: 12,
      pic: pub,  
      text1: `Что-то с тихим стеклянным стуком опускается на мой столик. Неужели это?..`,
      screenType: 'simple',
      figure: null
    },
    {
      turn: 13,
      pic: pub,
      text1: `Боже, наконец-то. Не местный эль, но какое-то чуть теплое травяное пойло. Отлично утоляет жажду.`,
      text2: `Нет, мне хватило выдержки сначала принюхаться, а только потом выхлебать половину. За кого вы меня принимаете?..`,
      screenType: 'simple',
      figure: null,
    },
    {
      turn: 14,
      pic: pub,
      text1: `...Итак, у кого в этой дыре еще осталось сердце?..`,
      text2: `Если это было начало переговоров, сделаю ему скидку.`,
      screenType: 'simple',
      figure: null,
    },
    {
      turn: 15,
      pic: pub,
      text1: `Оторвавшись от кружки, я вижу только спину с ремнями кобуры - он уходит за свой дальний столик.`,
      text2: `Похоже, это был акт чистого великодушия.`,
      screenType: 'simple',
      figure: {
        url: albert,
        position: 'game__figure4'
      },
    },
    {
      turn: 16,
      pic: pub,  
      text1: `Этот парень был здесь вчера.`,
      text2: `Выглядит как местный шериф или маршал - или тот, кто прикончил местного маршала.`,
      screenType: 'simple',
      figure: {
        url: albert,
        position: 'game__figure4'
      },
      button1: {
        text: '- Спасибо, друг.',
      },
    },
    {
      turn: 17,
      pic: pub,  
      text1: `- Будь здоров, ${localStorage.getItem('userNick')}.`,
      text2: `Хм, так мы уже знакомы.`,
      screenType: 'simple',
      figure: {
        url: albert,
        position: 'game__figure4'
      },
      button1: {
        text: 'Салютую ему полупустой кружкой.',
      },
    },
    {
      turn: 18,
      pic: pub,  
      text1: `...Знаете, иногда даже дверь хлопает так, что делается ясно: будет заварушка.`,
      text2: `Бывает такая ритмика походки. В Пустошах привыкаешь слышать такие вещи.`,
      screenType: 'simple',
      figure: null,
    },
    {
      turn: 19,
      pic: pub,  
      text1: `Особенно когда заходят сразу трое - вот такие.`,
      text2: `В воздухе запахло проблемами , пылью и конским потом.`,
      screenType: 'simple',
      figure: {
        url: bandits,
        position: 'game__figure3'
      }
    },
    {
      turn: 20,
      pic: pub,  
      text1: `Здесь игра пока заканчивается.`,
      text2: `Но скоро история двинется дальше!`,
      screenType: 'endpoint',
      next: 'Prologue. Part 2',
      figure: null,
      button1: {
        text: 'На главную',
      },
    },
  ];

  const module2:Array<TScreen> = [
    {
      turn: 1,
      pic: pub, 
      text1: 'Голова у меня гудит. Вчерашняя пьянка была что надо - жаль, я не слишком хорошо ее помню. Кстати, сейчас полдень или?..',
      screenType: 'simple',
      figure: null,
    },
  ]

  function skip1() {
    setCount(count + 1);
  }

  function handleChoise(item: string | number | undefined) {
    console.log('выбор');
    console.log(currentChoise);
    if (cadr.screenType === 'choise') {
      setCurrentChoise(currentChoise + item);
    }
    skip1()
  }

  function sumChoises() {
    if (part === 'Пролог. Часть 1' && currentChoise.length === 4) {
      let brave = 0;
      let clever = 0;
      let quite = 0;
      let arr = currentChoise
      .split('')
      .forEach(item => {
        if (item === '1') {
          brave = brave + 1
        }
        if (item === '2') {
          clever = clever + 1
        }
        if (item === '3') {
          quite = quite + 1
        }
      });
      setCurrentChoise('');
      /*console.log('brave' + brave);
      console.log('quite' + quite);
      console.log('clever' + clever);*/
      if (brave > clever && brave > quite) return 'A';
      if (clever > brave && clever > quite) return 'B';
      if (quite > brave && quite > clever) return 'C';
      if (brave === clever) return 'D';
      if (brave === quite) return 'E';
      if (quite === clever) return 'F';
    }
  }

  useEffect(() => {
    if (gameProgress !== 'R1') {
      console.log(gameProgress);
      setChoise(gameProgress);
      setCount(10);
    }
  }, []);

  useEffect(() => {
    if (currentChoise.length >= 4) {
      setChoise(choise + sumChoises());
      localStorage.setItem('gameProgress', choise + sumChoises());
      console.log('save R1+');
      console.log(localStorage);
      dispatch(setProgress(choise))
    }
  }, [currentChoise]);

  useEffect(() => {
    if (count !== 0) {
      setCadr(module1[count]);
    }
  }, [count]);

  useEffect(() => {
    if (count !== 0) {
      setCadr(module1[count]);
    }
  }, [count]);

  return (
    <>
      <main className="game__content">
        <img src={fone} alt="Серый фон" className="game__fone"/>
        <img 
          src={cadr.pic} 
          alt="Пейзажи постапокалиптического города" 
          className="game__pic"
        />
        {cadr.figure &&
          <img 
            src={cadr.figure.url} 
            className={cadr.figure.position}/> 
        }
        <div className="game__textBlock">
          <div className="game__infoBlock">
            <h2 className="game__stageText">
              {part}
            </h2>
            <p className="game__name">
              {localStorage.getItem('userName')} {localStorage.getItem('userNick')}
            </p>
            <div className="game__save">
              <p className="game__saveText">
                {choise}
              </p>
            </div>
            <p className="game__smallText ">
              текущий прогресс
            </p>
          </div>
          <div className="game__dialogBlock">
            <p className="game__text2">
              {cadr.text1}
            </p>
            {cadr.text2 &&
              <p className="game__text2">
                {cadr.text2}
              </p>
            }
            {cadr.screenType === 'simple' && cadr.button1 && cadr.button1 !== undefined &&
              <p 
                className="game__choise"
                onClick={e => {handleChoise(cadr?.button1?.mark)}}>
                {cadr.button1.text}
              </p> 
            }
            {cadr.screenType === 'endpoint' && cadr.button1 && cadr.button1 !== undefined &&
              <p 
                className="game__choise"
                onClick={e => {goNext('main')}}>
                {cadr.button1.text}
              </p> 
            }
            {cadr.screenType === 'choise' && 
            <>
              {cadr.button1 && cadr.button1 !== undefined &&
              <p 
                className="game__choise"
                onClick={e => {handleChoise(cadr?.button1?.mark)}}>
                {cadr.button1.text}
              </p> 
              }
              {cadr.button2 && cadr.button2 !== undefined &&
              <p 
                className="game__choise"
                onClick={e => {handleChoise(cadr?.button2?.mark)}}>
                {cadr.button2.text}
              </p> 
              }
              {cadr.button3 && cadr.button3 !== undefined &&
              <p 
                className="game__choise"
                onClick={e => {handleChoise(cadr?.button3?.mark)}}>
                {cadr.button3.text}
              </p>
              }
            </>}
            {cadr.screenType !== 'choise' && cadr.screenType !== 'endpoint' && !cadr.button1 &&
              <img src={skip2} onClick={skip1} className="game__skip"/> 
            }
          </div>

        </div>

      </main>
    </>
  );
}  

export default GameScreen; 
