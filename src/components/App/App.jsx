import React, { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main.jsx';
import PageNotFound from '../PageNotFound/PageNotFound.jsx';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserName, setUserNick, clearUser } from '../../services/actions/user';

function App() {

  //const { currentDeck } = useSelector(state => state.currentDeckReducer);
  //const { currentWord } = useSelector(state => state.currentDeckReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userName } = useSelector(state => state.userReducer);

  useEffect(() => {
    console.log(localStorage)
  }, [localStorage.userNick]);

  useEffect(() => {
    if ((localStorage.getItem('userName') !== (null || undefined)) &&
    (localStorage.getItem('userNick') !== (null || undefined))) {
      console.log(localStorage.getItem('userName'));
      dispatch(setUserName(localStorage.getItem('userName')));
      dispatch(setUserNick(localStorage.getItem('userNick')));
    }
  }, []);

  useEffect(() => {
    console.log(userName);
  }, [userName]);

  return (
    <>
      <div className="page">
        <Routes>
          <Route 
            exact path="/" 
            element={
              <Main />
            }>  
          </Route>
          <Route 
            path="*" 
            element={
              <PageNotFound/>
            }>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
