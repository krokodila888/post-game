import React, { FC, useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import './Footer.css';
import useSound from 'use-sound';
import play from '../../images/play.png';
import stop1 from '../../images/stop.png';
import github from '../../images/git.png';

type TFooterProps = {
  musicOn: any;
  soundOn: any;
  soundOff: any;
}

const Footer: FC<TFooterProps> = ({ musicOn, soundOn, soundOff }) => {

  //const {musicOn, soundOn, soundOff} = props;

  return (
    <footer className="footer">
      <div className="footer__content">
        <button 
          onClick={() => {musicOn ? soundOff() : soundOn()}}
          className="footer__sound-button">
          <img 
            src={musicOn ? stop1 : play}
            className="footer__sound-button1"/>
        </button>
        <div className="footer__text-block">
          <a href='https://github.com/krokodila888' className="footer__link-text" target="_blank">
            <img className="footer__social-icon" src={github}/>  Github/contacts
          </a>   
          <p className="footer__text">
            © 2024
          </p>   
        </div>
      </div>
    </footer>
  );
}  

export default Footer;
