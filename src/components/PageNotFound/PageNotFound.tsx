import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './PageNotFound.css';
import arrow from '../../images/arrow2.png';

const PageNotFound: FC = () => {

  const navigate = useNavigate();

  function goBack() {
    navigate('/');
  }

  return (
    <>
      <section className="pageNotFound">
        <h3 className="pageNotFound__title">404</h3>
        <p 
          className="pageNotFound__text" >
            Тут пока ничего нет.
        </p>
        <div className="deckItem__arrow-container" onClick={goBack}>
          <img 
            src={arrow} 
            alt="Стрелка назад" 
            className='deckItem__arrow'
          />
            <p className="pageNotFound__text">
              Вернитесь на главную.
            </p>
        </div>
      </section>
    </>
  )
}

export default PageNotFound;
