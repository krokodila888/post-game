import React, { FC, useEffect, useState, ChangeEvent } from "react";
import fone from '../../images/fone.jpg';
import plakat from '../../images/plakat1.png';
import './ResumeGameScreen.css';
import { useSelector, useDispatch } from 'react-redux';
import { setUserName, setUserNick, setProgress, setTemporaryProgress, clearUser } from '../../services/actions/user';
import { TNickList } from '../../utils/types';

type TResumeGameScreenProps = {
  goNext: any;
  screen: string;
}

const ResumeGameScreen: FC<TResumeGameScreenProps> = ({ goNext, screen }) => {

  const [form, setValue] = useState({ userName: '', nick: 'Бродяга' });
  const [nameSaving, setNameSaving] = useState(false);
  const [gameSaving, setGameSaving] = useState(false);
  const [combination, setCombination] = useState({userCombination: ''});
  const [button1, setButton1] = useState(false);
  const [button2, setButton2] = useState(false);
  const [button3, setButton3] = useState(false);
  const [button4, setButton4] = useState(false);
  const [button5, setButton5] = useState(false);
  const { userName, userNick, gameProgress } = useSelector((state: any) => state.userReducer);
  const dispatch = useDispatch();
  const nickList = React.useRef<any>();

  function handleUser(evt: any) {
    evt.preventDefault();
    //console.log('button1' + button1);
    //console.log('gamesaving' + gameSaving);
    dispatch(setUserName(form.userName));
    dispatch(setUserNick(form.nick));
    //console.log(form);
    setButton1(true);
  }

  useEffect(() => {
    if ((userName !== null) && (userName !== localStorage.getItem('userName')))
    localStorage.setItem('userName', userName);
  }, [userName]);

  useEffect(() => {
    if (userNick !== null && userNick !== localStorage.getItem('userNick'))
    localStorage.setItem('userNick', userNick);
  }, [userNick]);

  /*useEffect(() => {
    localStorage.setItem('gameProgress', gameProgress);
  }, [gameProgress]);*/

  //при уходе со страницы обнуляем форму
  useEffect(() => {
    if (screen !== 'resume')
    {setValue({ userName: '', nick: '' });
    setButton1(false);
    setButton2(false);
    setButton3(false);
    setButton4(false);
    setButton5(false);
    setNameSaving(false);
    setGameSaving(false);
  }
  }, []);

  //восстановление прошлой игры - данные игрока
  useEffect(() => {
    if (
      (localStorage.getItem('userName') !== null || undefined) && (localStorage.getItem('userNick') !== null || undefined)
    ) {
      setValue({userName: `${localStorage.getItem('userName')}`, nick: `${localStorage.getItem('userNick')}`});
      nickList.current.value = localStorage.getItem('userNick');
      setNameSaving(true);
    }
    else {
      setNameSaving(false);
    }
  }, []);

  function checkExpression(x: string | null | undefined) {
    console.log('saving:' + x);
    let regexp = /^R\d[A-F]?/;
    if (x !== undefined && x !== null)
      {console.log(regexp.test(x))
      }
    if (x !== undefined && x?.length !== undefined && x?.length >= 2) 
    return (regexp.test(x));
  }

  //восстановление прошлой игры - данные игры
  useEffect(() => {
    //если в хранилище что-то лежит и оно валидно...
    if (
      (localStorage.getItem('gameProgress') !== null || undefined) && checkExpression(localStorage.getItem('gameProgress'))
    ) {
      //пишем в консоль, меняем переменную, кладем в стор
      let saving = localStorage.getItem('gameProgress');
      console.log('valid saving!!')
      console.log('gameProgress LS' + localStorage.getItem('gameProgress'))
      setGameSaving(true);
      if (saving !== null) {
      dispatch(setProgress(saving));
      console.log('gameProgress' + gameProgress)
      }
    }
    else {
      console.log('no saving');
      setGameSaving(false);
    }
  }, []);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue({ ...form, [e.target.name]: e.target.value });
    console.log(form);
    /*dispatch(setUserName(form.name));
    dispatch(setUserNick(form.nick));*/
  };

  const onChangeCombination = (e: ChangeEvent<HTMLInputElement>) => {
    setCombination({ ...combination, [e.target.name]: e.target.value });
    console.log(combination);
    /*dispatch(setUserName(form.name));
    dispatch(setUserNick(form.nick));*/
  };

  const onChangeNick = (e: ChangeEvent<HTMLSelectElement>) => {
    if (nickList.current) {
      setValue({ ...form, nick: nickList.current.value });
      console.log(form);
    }
  };

  function onAnotherClick() {
    setButton2(true);
  }

  function onForgetClick() {
    //setButton4(true);

  }

  function onStartClick() {
    setButton3(true);
    setTimeout(() => {
      goNext('game');
      console.log('start game');
      }, 3000);
  }

  function onCheckClick() {
    if (checkExpression(combination.userCombination)) {
      dispatch(setProgress(combination.userCombination));
      localStorage.setItem('gameProgress', combination.userCombination);
      console.log('userName' + userName + userNick)
      console.log('gameProgress' + gameProgress);
      console.log(localStorage);
      onStartClick()
    }
    else setButton5(true);
  }


  function onNewGameClick() {
    goNext('newGame');
  }

  return (
    <main className="resumeGameScreen__content">
      <div className="resumeGameScreen__textblock-content">
        { (!button3 && !button4) && <>
        <h2 className="resumeGameScreen__title">Ну здравствуй, друг.</h2>
        <p className="resumeGameScreen__text">Давно тебя не было. Но я помню, ты...</p>
        <form 
          onSubmit={handleUser}
          className="resumeGameScreen__form">
          <input
            placeholder="Меня зовут..."
            autoComplete="off" 
            value={form.userName} 
            name="userName" 
            onChange={onChange}
            required
            minLength={2}
            maxLength={14}
            className="resumeGameScreen__input">
          </input>
          <select id="nickList" className="resumeGameScreen__input" ref={nickList} onChange={onChangeNick}>
            <option selected defaultValue="Бродяга">Бродяга</option>
          	<option value="Задира">Задира</option>
  	        <option value="Заноза">Заноза</option>
	          <option value="Зараза">Зараза</option>
       	    <option value="Горчица">Горчица</option>
	          <option value="Гангрена">Гангрена</option>
       	    <option value="Пуля">Пуля</option>
	          <option value="Могила">Могила</option>
          </select>
          <button 
            type="button" 
            onClick={handleUser} 
            className="resumeGameScreen__button ">
            Все верно
          </button>
          <p className="resumeGameScreen__small-text">Если возьмешь другое имя - прежнее все забудут!</p>
        </form>

        {button1 && gameSaving && 
        <>
          <p className="resumeGameScreen__text">
            Я помню, на чем ты остановился. Хочешь продолжить?
          </p>
          <div className="resumeGameScreen__button-block">
            <button 
              className="resumeGameScreen__small-button"
              onClick={onStartClick}>
                Да, погнали
            </button>
            <button 
              className="resumeGameScreen__small-button"
              onClick={onAnotherClick}>
                Нет, хочу начать<br/>в другом месте
            </button>
          </div>
        </>
        }
        {((button1 && !gameSaving) || (button1 && button2)) && 
        <>
          <p className="resumeGameScreen__text">
            Не напомнишь, где ты остановился?
          </p>
          <input
            placeholder="Место для комбинации"
            autoComplete="off" 
            value={combination.userCombination} 
            name="userCombination" 
            onChange={onChangeCombination}
            minLength={2}
            maxLength={3}
            className="resumeGameScreen__input">
          </input>
          {button5 && 
            <p className="resumeGameScreen__small-text">
              Тут какая-то ошибка, уж прости
            </p>
          }
          <div className="resumeGameScreen__button-block">
            <button 
              className="resumeGameScreen__small-button"
              onClick={onCheckClick}>
                Вот здесь
            </button>
            <button 
              className="resumeGameScreen__small-button"
              onClick={onNewGameClick}>
                Не помню, давай <br/>сначала
              </button>
          </div>
        </>
        }
        { button4 && 
        <>
          <p className="resumeGameScreen__text">
            Тогда давай вспомним.
          </p>
          <div className="resumeGameScreen__button-block">
            <button 
              className="resumeGameScreen__small-button"
              onClick={onStartClick}>
                Вот здесь
            </button>
            <button 
              className="resumeGameScreen__small-button"
              onClick={onNewGameClick}>
                Давай лучше <br/>сначала
              </button>
          </div>
        </>
        }
      </>  
      }

      {button3 && 
      <p className="resumeGameScreen__last-text">
        Удачи тебе, {userNick}!
      </p>
      }
      </div>
      <img className="resumeGameScreen__pic" src={plakat}/>
    </main>
  );
}  

export default ResumeGameScreen;
