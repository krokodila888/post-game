import React, { FC, useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import PageNotFound from '../PageNotFound/PageNotFound';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserName, setUserNick, clearUser } from '../../services/actions/user.js';

const App: FC = () => {

  //const { currentDeck } = useSelector(state => state.currentDeckReducer);
  //const { currentWord } = useSelector(state => state.currentDeckReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userName } = useSelector((state: any) => state.userReducer);

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

  /*useEffect(() => {
    console.log(userName);
  }, [userName]);*/

  return (
    <>
      <div className="page">
        <Routes>
          <Route 
            path="/" 
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