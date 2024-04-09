import React, { FC, useEffect, useState, ChangeEvent } from "react";
import fone from '../../images/fone.jpg';
import plakat from '../../images/plakat1.png';
import './NewGameScreen.css';
import { useSelector, useDispatch } from 'react-redux';
import { setUserName, setUserNick, setProgress, clearUser } from '../../services/actions/user';
import { TNickList } from '../../utils/types';

type TNewGameProps = {
  goNext: any;
  screen: string;
}

const NewGameScreen: FC<TNewGameProps> = ({ goNext, screen }) => {

  //для себя - еще нужно предупреждение, что данные старой игры сотрутся!

  const [form, setValue] = useState({ name: '', nick: 'Бродяга' });
  const [button1, setButton1] = useState(false);
  const [button2, setButton2] = useState(false);
  const [button3, setButton3] = useState(false);
  const [button4, setButton4] = useState(false);
  const { userName, userNick } = useSelector((state: any) => state.userReducer);
  const dispatch = useDispatch();
  const nickList = React.useRef<any>();
  const nameButton = React.useRef<any>();
  const nameInput = React.useRef<any>();

  function handleUser(evt: any) {
    evt.preventDefault();
    console.log(form);
    dispatch(setUserName(form.name));
    dispatch(setUserNick(form.nick));
    setButton2(true);
    //setButton1(false)
  }

  useEffect(() => {
    if (screen !== 'newGame')
    {setValue({ name: '', nick: '' });
    setButton1(false);
    setButton2(false);
    setButton3(false);
    setButton4(false);
  }
  }, []);

  useEffect(() => {
    if (screen !== 'newGame')
    {setValue({ name: '', nick: '' });
    setButton1(false);
    setButton2(false);
    setButton3(false);
    setButton4(false);
  }
  }, []);

  useEffect(() => {
    console.log(form);
  }, [form]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(form);
    setValue({ ...form, [e.target.name]: e.target.value });
    /*dispatch(setUserName(form.name));
    dispatch(setUserNick(form.nick));*/
  };

  const onChangeNick = (e: ChangeEvent<HTMLSelectElement>) => {
    if (nickList.current) {
      setValue({ ...form, nick: nickList.current.value });
    }
  };

  function handleClick() {
    if (nameInput.current?.validity.valid) {
      setButton1(true);
    }
  }

  useEffect(() => {
    if (!nameInput.current?.validity.valid) {
      console.log('invalid name');
      setButton1(false);
    }
  }, [form.name]);

  //смотреть пролог
  function onPrologueClick() {
    setButton4(true);
    setTimeout(() => {
      console.log('start prologue');
      goNext('prologue');
      }, 3000);
  }

  //начать игру
  function onStartClick() {
    setButton3(true);
    setTimeout(() => {
      dispatch(setProgress('R1'));
      localStorage.setItem('gameProgress', 'R1');
      goNext('game');
      console.log('start game');
      }, 3000);
  }

  /*useEffect(() => {
    if (nameInput.current)
  }, [form.name]);*/

  useEffect(() => {
    console.log(localStorage)
  }, [localStorage.userName]);

  useEffect(() => {
    localStorage.setItem('userName', userName);
  }, [userName]);

  useEffect(() => {
    localStorage.setItem('userNick', userNick);
  }, [userNick]);

  return (
    <main className="newGameScreen__content">
      <div className="newGameScreen__textblock-content">
        { (!button3 && !button4) ? <>
        <h2 className="newGameScreen__title">Ну здравствуй, друг.</h2>
        <p className="newGameScreen__text">Давай знакомиться. Как твое имя?</p>
        <form 
          onSubmit={handleUser}
          className="newGameScreen__form">
          <input
            placeholder="Меня зовут..."
            autoComplete="off" 
            value={form.name} 
            name="name" 
            onChange={onChange}
            required
            minLength={2}
            maxLength={14}
            className="newGameScreen__input"
            ref={nameInput}>
          </input>
          <button 
            type="button" 
            onClick={handleClick} 
            className="newGameScreen__button"
            ref={nameButton}>
            Так ты обо мне слышал?
          </button>
        {(form.name !== '' && button1) ? <>
        <p className="newGameScreen__text">Что-то припоминаю...</p>
        <p className="newGameScreen__text">Но как тебя называют в Пустошах?</p>
        <select id="select" className="newGameScreen__input" ref={nickList} onChange={onChangeNick}>
          <option selected value="Бродяга">Бродяга</option>
      	  <option value="Задира">Задира</option>
  	    	<option value="Заноза">Заноза</option>
	      	<option value="Зараза">Зараза</option>
       	  <option value="Горчица">Горчица</option>
	    	  <option value="Гангрена">Гангрена</option>
       	  <option value="Пуля">Пуля</option>
	      	<option value="Могила">Могила</option>
        </select>
        <p className="newGameScreen__small-text">Не каждый может выбрать себе кличку. Выбирай мудро!</p>
        <button type="submit" className="newGameScreen__button ">
          Нужные люди меня знают
        </button>
        </> : <></>
        }
        {button2 ? 
        <>
          <p className="newGameScreen__text">Ты хорошо понимаешь, куда попал?</p>
          <div className="newGameScreen__button-block">
            <button 
              className="newGameScreen__small-button"
              onClick={onStartClick}>
                Я знаю эти края лучше тебя, старик!</button>
            <button 
              className="newGameScreen__small-button"
              onClick={onPrologueClick}>
                Расскажи - давно <br/>у вас не был
              </button>
          </div>
        </>
        : <></>}
        </form>
      </> : <>
        {button3 ? 
        <p className="newGameScreen__last-text">Тогда удачи тебе, {userNick}!</p>
        : <></>}
        {button4 ? 
        <p className="newGameScreen__last-text">Ну, слушай внимательно, {userNick}...</p>
        : <></>}
        </>}
      </div>
      <img className="newGameScreen__pic" src={plakat}/>
    </main>
  );
}  

export default NewGameScreen;
