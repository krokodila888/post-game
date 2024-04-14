import React, { FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import fone from '../../images/fone.jpg';
import pub from '../../images/pub1.png';
import skip from '../../images/skip.png';
import skip2 from '../../images/skip-white.png';
import { TScreen } from '../../utils/types';
import './ChoiceScreenBlock.css';
import {
  setUserName,
  setUserNick,
  setProgress,
  setTemporaryProgress,
  clearUser,
} from '../../services/actions/user';

type TChoiceScreenBlockProps = {
  goNext: (arg0: string) => void;
  cadr: TScreen;
  skip: (arg0: any) => void;
  handleChoice: (arg0: any) => void;
};

const ChoiceScreenBlock: FC<TChoiceScreenBlockProps> = ({
  goNext,
  cadr,
  skip,
  handleChoice,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userName, userNick, gameProgress } = useSelector(
    (state: any) => state.userReducer
  );

  return (
    <>
      <div className="game__dialogBlock">
        <p className="game__text2">{cadr.text1}</p>
        {cadr.text2 && <p className="game__text2">{cadr.text2}</p>}
        {cadr.screenType === 'simple' &&
          cadr.button1 &&
          cadr.button1 !== undefined && (
            <p className="game__choice" onClick={skip}>
              {cadr.button1.text}
            </p>
          )}
        {cadr.screenType === 'endChapter' &&
          cadr.button1 &&
          cadr.button1 !== undefined && (
            <p
              className="game__choice"
              onClick={(e) => {
                skip(cadr?.button1?.mark);
              }}
            >
              {cadr.button1.text}
            </p>
          )}
        {cadr.screenType === 'endpoint' &&
          cadr.button1 &&
          cadr.button1 !== undefined && (
            <p
              className="game__choice"
              onClick={(e) => {
                goNext('main');
              }}
            >
              {cadr.button1.text}
            </p>
          )}
        {cadr.screenType === 'choice' && (
          <>
            {cadr.button1 && cadr.button1 !== undefined && (
              <p
                className="game__choice"
                onClick={(e) => {
                  handleChoice(cadr?.button1?.mark);
                }}
              >
                {cadr.button1.text}
              </p>
            )}
            {cadr.button2 && cadr.button2 !== undefined && (
              <p
                className="game__choice"
                onClick={(e) => {
                  handleChoice(cadr?.button2?.mark);
                }}
              >
                {cadr.button2.text}
              </p>
            )}
            {cadr.button3 && cadr.button3 !== undefined && (
              <p
                className="game__choice"
                onClick={(e) => {
                  handleChoice(cadr?.button3?.mark);
                }}
              >
                {cadr.button3.text}
              </p>
            )}
          </>
        )}
        {cadr.screenType !== 'choice' &&
          cadr.screenType !== 'endpoint' &&
          !cadr.button1 && (
            <img src={skip2} onClick={skip} className="game__skip" />
          )}
      </div>
    </>
  );
};

export default ChoiceScreenBlock;
