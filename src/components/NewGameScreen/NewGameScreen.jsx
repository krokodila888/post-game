import React, { useEffect, useState } from "react";
import fone from '../../images/fone.jpg';
import './NewGameScreen.css';
import { useSelector, useDispatch } from 'react-redux';
import { setUserName, setUserNick, clearUser } from '../../services/actions/user';

function NewGameScreen(props) {

  const {goNext, screen} = props;
  
  const [form, setValue] = useState({ name: '', nick: '' });
  const [button1, setButton1] = useState(false);
  const [button2, setButton2] = useState(false);
  const { userName, userNick } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  function handleUser(evt) {
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
  }
  }, []);

  /*useEffect(() => {
    if (user !== null)
    navigate("/");
  }, []);*/

  const onChange = e => {
    console.log(form);
    setValue({ ...form, [e.target.name]: e.target.value });
    /*dispatch(setUserName(form.name));
    dispatch(setUserNick(form.nick));*/
  };

  function handleClick() {
    setButton1(true);
  }

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
      <h2>Ну здравствуй, друг.</h2>
      <p>Давай знакомиться. Как твое имя?</p>
      <form 
        onSubmit={handleUser}
        className="newGameScreen__form">
        <input
          placeholder="Меня зовут..."
          autocomplete="off" 
          value={form.name} 
          name="name" 
          onChange={onChange}
          required
          minLength="2"
          maxLength="14"
          className="newGameScreen__input">
        </input>
        <button type="button" onClick={handleClick} className="newGameScreen__button ">
          Так ты обо мне слышал?
        </button>
      {(form.name !== '' && button1) ? <>
      <p>Что-то припоминаю. Но как тебя знают в Пустошах?</p>
      <input
        placeholder="Так как тебя знают в Пустошах?" 
        value={form.nick} 
        name="nick" 
        onChange={onChange}
        className="newGameScreen__input">
      </input>
      <select id="select" className="newGameScreen__input">
        <option select='selected' value="Бродяга">Бродяга</option>
      	<option value="Задира">Задира</option>
	    	<option value="Заноза">Заноза</option>
	    	<option value="Зараза">Зараза</option>
     	  <option value="Горчица">Горчица</option>
	    	<option value="Оса">Оса</option>
	    	<option value="Гангрена">Гангрена</option>
     	  <option value="Пуля">Пуля</option>
	    	<option value="Могила">Могила</option>
      </select>
      <p>Не каждый может выбрать себе кличку. Выбирай мудро!</p>
      <button type="submit" className="newGameScreen__button ">
        Нужные люди меня знают
      </button>
      </> : <></>
      }
      {button2 ? 
      <>
        <p>Ты хорошо понимаешь, куда попал?</p>
        <div className="newGameScreen__button-block">
          <button 
            className="newGameScreen__small-button"
            onClick={e => {goNext('game')}}>
              Я знаю эти края лучше тебя, старик!</button>
          <button 
            className="newGameScreen__small-button"
            onClick={e => {goNext('prologue')}}>
              Мне бы ознакомительный курс...
            </button>
        </div>
      </>
      : <></>}
      </form>
    </main>
  );
}  

export default NewGameScreen;
