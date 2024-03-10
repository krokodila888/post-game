import React from 'react'
import './Preloader.css'
import mereng from '../../../images/mereng.png';

const Preloader = (props) => {

  const {isLoading} = props;

  return (
    <div className={isLoading ? "preloader_isActive" : "preloader"}>
      <div className="preloader__container">
        <img src={mereng} alt="Фото красивой меренги в виде прелоадера, медленно крутится" className="preloader__round" />
      </div>
    </div>
  )
};

export default Preloader

/*
      <div className="preloader__container">
        <span className="preloader__round"></span>
      </div>
      */
