import React, { FC, useEffect, useState, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import fone from '../../images/fone.jpg';
import pub from '../../images/pub1.png';
import figure1 from '../../images/figure1.png';
import figure2 from '../../images/figure2.png';
import figure6 from '../../images/figure6.png';
import figure5 from '../../images/figure5.png';
import bandits from '../../images/bandits.png';
import albert from '../../images/albert.png';
import { TScreen } from '../../utils/types';
import ChoiceScreenBlock from '../ChoiceScreenBlock/ChoiceScreenBlock';
import './GameScreen.css';
import {
  setUserName,
  setUserNick,
  setProgress,
  setTemporaryProgress,
  clearUser,
} from '../../services/actions/user';

type TGameProps = {
  goNext: (arg0: string) => void;
  screen: string;
};

const GameScreen: FC<TGameProps> = ({ goNext, screen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userName, userNick, gameProgress, temporaryProgress } = useSelector(
    (state: any) => state.userReducer
  );
  const [count, setCount] = useState(0);
  const [part, setPart] = useState('Пролог. Часть 1');
  const [module, setModule] = useState<TScreen[]>([]);
  const [currentChoice, setCurrentChoice] = useState('');
  const [choice, setChoice] = useState('R1');
  const valueRef = React.useRef('');
  const [cadr, setCadr] = useState<TScreen>({
    turn: 0,
    pic: pub,
    text1:
      'Голова у меня гудит. Вчерашняя пьянка была что надо - жаль, я не слишком хорошо ее помню. Кстати, сейчас полдень или?..',
    screenType: 'simple',
    figure: null,
  });

  //если прогресс не задан на продолжении игры, начинаем сначала
  useEffect(() => {
    console.log('setting module1');
    if (!gameProgress || gameProgress === 'R1') {
      console.log('setting module 2');
      setModule(module1);
      console.log(module);
    }
  }, []);

  const module2: Array<TScreen> = [
    {
      turn: 0,
      pic: pub,
      text1: 'Итак, на чем мы остановились?',
      screenType: 'simple',
      figure: {
        url: bandits,
        position: 'game__figure3',
      },
    },
    {
      turn: 1,
      pic: pub,
      text1: 'Итак, на чем мы остановились?',
      text2: 'Кажется, будет потасовка. Шкурой чую такие вещи.',
      screenType: 'simple',
      figure: {
        url: bandits,
        position: 'game__figure3',
      },
    },
    {
      turn: 1,
      pic: pub,
      text1: 'Итак, на чем мы остановились?',
      text2: 'Кажется, будет потасовка. Шкурой чую такие вещи.',
      screenType: 'simple',
      figure: {
        url: bandits,
        position: 'game__figure3',
      },
    },
    {
      turn: 2,
      pic: pub,
      text1: `Проходя мимо, один их них опрокидывает мое пиво.`,
      text2: `Да, я не выгляжу самым опасным человеком в этом зале, но всему есть границы.`,
      screenType: 'choice',
      button1: {
        text: '- Надеюсь, это была случайность, приятель.',
        mark: 1,
      },
      button2: {
        text: `Подождать, пока они сцепятся с тем парнем. Опыт подсказывает мне, что ждать не придется.`,
        mark: 2,
      },
      figure: {
        url: bandits,
        position: 'game__figure3',
      },
    },
    {
      turn: 3,
      pic: pub,
      text1: `${currentChoice === '1' ? '- Чего тебе?' : currentChoice === '2' ? 'Щурясь, я смотрю, как те ребята проходят к стойке.' : ''}`,
      screenType: 'simple',
      button1: {
        text: `${currentChoice === '1' ? '- Я не хочу проблем, вы не хотите копать друзьям могилу. У нас еще есть шансы.' : currentChoice === '2' ? 'Пересекаюсь взглядом с тем парнем в конце зала и едва заметно киваю.' : ''}`,
      },
      figure: {
        url: bandits,
        position: 'game__figure3',
      },
    },
    {
      turn: 4,
      pic: pub,
      text1: `Здесь игра пока заканчивается.`,
      text2: `Но скоро история двинется дальше!`,
      screenType: 'endpoint',
      figure: null,
      button1: {
        text: 'На главную',
      },
    },
  ];

  const module1: Array<TScreen> = [
    {
      turn: 1,
      pic: pub,
      text1:
        'Голова у меня гудит. Вчерашняя пьянка была что надо - жаль, я не слишком хорошо ее помню. Кстати, сейчас полдень или?..',
      screenType: 'simple',
      figure: null,
    },
    {
      turn: 2,
      pic: pub,
      text1:
        'Помню мало, хоть убейте. Я в Андерстаде - это дыра на востоке Территорий по пути к Магистрали. Хотелось скрасить вечер, чтоб его...',
      screenType: 'simple',
      figure: null,
    },
    {
      turn: 3,
      pic: pub,
      text1:
        'По крайней мере, пушки при мне. Насчет бумажника сомневаюсь, но вначале надо что-нибудь выпить.',
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
      text2: 'Кто это еще?..',
      screenType: 'simple',
      figure: null,
    },
    {
      turn: 6,
      pic: pub,
      text1: `- Это вас берут проводником, если хотят пройти Костяной перевал без жертв?..`,
      screenType: 'choice',
      button1: {
        text: '- А какой у вас груз? Это недешево.',
        mark: 1,
      },
      button2: {
        text: '- Я уже не работаю в тех краях.',
        mark: 2,
      },
      button3: {
        text: 'Сделать сложное лицо',
        mark: 3,
      },
      figure: {
        url: figure1,
        position: 'game__figure2',
      },
    },
    {
      turn: 7,
      pic: pub,
      text1: `- Ты ${localStorage.getItem('userNick')}, который возит в Согнберг выпивку под носом у Стражей?`,
      screenType: 'choice',
      button1: {
        text: '- И не только выпивку. И вот кстати...',
        mark: 1,
      },
      button2: {
        text: `- Нет, это был другой ${localStorage.getItem('userNick')}.`,
        mark: 2,
      },
      button3: {
        text: 'Покоситься в сторону выпивки',
        mark: 3,
      },
      figure: {
        url: figure2,
        position: 'game__figure',
      },
    },
    {
      turn: 8,
      pic: pub,
      text1: `Вот что значит популярность.`,
      text2: `Хоть кто-нибудь здесь принесет мне выпить?..`,
      screenType: 'simple',
      figure: null,
    },
    {
      turn: 9,
      pic: pub,
      text1: `- Это ведь к вам обращаются, если нужно вывезти человека из Новой Алои?..`,
      screenType: 'choice',
      button1: {
        text: '- О таком не говорят с незнакомцами. Но мы можем познакомиться.',
        mark: 1,
      },
      button2: {
        text: `- Вы ничего не докажете.`,
        mark: 2,
      },
      button3: {
        text: 'Движением брови дать понять, что не намерен отвечать на сухое горло.',
        mark: 3,
      },
      figure: {
        url: figure5,
        position: 'game__figure2',
      },
    },
    {
      turn: 10,
      pic: pub,
      text1: `- А это за твою голову концерн Солано обещает 500 крон и личную благодарность их капо?`,
      screenType: 'choice',
      button1: {
        text: '- 500 крон? Покажите мне идиота, который согласится.',
        mark: 1,
      },
      button2: {
        text: `- Им нужен какой-то другой ${localStorage.getItem('userNick')}. Удачи ему.`,
        mark: 2,
      },
      button3: {
        text: 'Многозначительно промолчать',
        mark: 3,
      },
      figure: {
        url: figure6,
        position: 'game__figure',
      },
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
      figure: null,
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
        position: 'game__figure4',
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
        position: 'game__figure4',
      },
      button1: {
        text: '- Спасибо, друг.',
      },
    },
    {
      turn: 17,
      pic: pub,
      text1: `- С добрым утром, ${localStorage.getItem('userNick')}.`,
      text2: `Хм, так мы знакомы.`,
      screenType: 'simple',
      figure: {
        url: albert,
        position: 'game__figure4',
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
        position: 'game__figure3',
      },
    },
    {
      turn: 20,
      pic: pub,
      text1: `Что же будет дальше?`,
      screenType: 'endChapter',
      next: module2,
      nextPart: 'Пролог. Часть 2',
      nextSave: 'R2',
      figure: null,
      button1: {
        text: 'Проверим!',
      },
    },
  ];

  function skip() {
    console.log(currentChoice);
    if (cadr.screenType === 'endChapter') {
      if (cadr.next !== undefined && cadr.nextPart !== undefined) {
        setModule(cadr.next);
        setCount(0);
        setCadr(cadr.next[0]);
        setPart(cadr.nextPart);
        setChoice('R2' + choice.slice(2));
        dispatch(setProgress('R2' + choice.slice(2)));
        localStorage.setItem('gameProgress', 'R2' + choice.slice(2));
      }
    } else setCount(count + 1);
  }

  async function handleChoice(item: string | number | undefined) {
    if (cadr.screenType === 'choice' && gameProgress.slice(0, 2) === 'R1') {
      console.log('choice R1!!!');
      console.log(item);
      setCurrentChoice(currentChoice + item);
      skip();
    }
    if (cadr.screenType === 'choice' && gameProgress.slice(0, 2) === 'R2') {
      console.log('choice R2!!!');
      console.log(item);
      setCurrentChoice(currentChoice + item);
    }
  }

  useEffect(() => {
    console.log('concl1 '+ (gameProgress.slice(0, 2) === 'R2'))
    if (gameProgress.slice(0, 2) === 'R2' && ((currentChoice === '1') || (currentChoice === '2'))) {
      console.log('gp === R2 =' + gameProgress.slice(0, 2) === 'R2');
      console.log(currentChoice);
      console.log(currentChoice === ('1' || '2'));
      console.log('choice: re-setting module2');
      let aaa = [...module2];
      setModule(aaa);
      skip();
    }
  }, [currentChoice, gameProgress]);

  function sumChoices() {
    if (part === 'Пролог. Часть 1' && currentChoice.length === 4) {
      let brave = 0;
      let clever = 0;
      let quite = 0;
      currentChoice.split('').forEach((item) => {
        if (item === '1') {
          brave = brave + 1;
        }
        if (item === '2') {
          clever = clever + 1;
        }
        if (item === '3') {
          quite = quite + 1;
        }
      });
      setCurrentChoice('');
      if (brave > clever && brave > quite) return 'A';
      if (clever > brave && clever > quite) return 'B';
      if (quite > brave && quite > clever) return 'C';
      if (brave === clever) return 'D';
      if (brave === quite) return 'E';
      if (quite === clever) return 'F';
    }
  }

  //тут задел под загрузку сохранения
  useEffect(() => {
    if (gameProgress !== 'R1' && gameProgress.slice(0, 2) === 'R1') {
      console.log(gameProgress);
      setModule(module1);
      setChoice(gameProgress);
      setCount(10);
    }
    if (gameProgress.slice(0, 2) === 'R2') {
      setChoice(gameProgress);
      console.log('setting module2 if R2');
      setModule(module2);
      setCadr(module2[0]);
      setCount(0);
      setPart('Пролог. Часть 2');
    }
  }, []);

  //тут о том, как суммируются текущие решения
  useEffect(() => {
    if (currentChoice.length >= 4) {
      setChoice(choice + sumChoices());
      console.log('sum choices');
      localStorage.setItem('gameProgress', choice + sumChoices());
      dispatch(setProgress(choice));
    }
  }, [currentChoice]);

  useEffect(() => {
    if (count !== 0) {
      setCadr(module[count + 1]);
    }
  }, [count]);

  useEffect(() => {
    console.log(module);
    console.log(gameProgress);
    console.log(part);
    console.log(cadr);
    console.log(currentChoice);
  }, [count]);

  return (
    <>
      <main className="game__content">
        <img src={fone} alt="Серый фон" className="game__fone" />
        <img
          src={cadr.pic}
          alt="Пейзажи постапокалиптического города"
          className="game__pic"
        />
        {cadr.figure && (
          <img src={cadr.figure.url} className={cadr.figure.position} />
        )}
        <div className="game__textBlock">
          <div className="game__infoBlock">
            <h2 className="game__stageText">{part}</h2>
            <p className="game__name">
              {localStorage.getItem('userName')}{' '}
              {localStorage.getItem('userNick')}
            </p>
            <div className="game__save">
              <p className="game__saveText">{choice}</p>
            </div>
            <p className="game__smallText ">текущий прогресс</p>
          </div>
          <ChoiceScreenBlock
            goNext={goNext}
            skip={skip}
            handleChoice={handleChoice}
            cadr={cadr}
          />
        </div>
      </main>
    </>
  );
};

export default GameScreen;
