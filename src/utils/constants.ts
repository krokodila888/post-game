import prologue1 from '../images/prologue1.jpg';
import prologue2 from '../images/main2.jpg';
import prologue3 from '../images/prologue3.jpeg';
import prologue5 from '../images/prologue5.jpg';
import prologue4 from '../images/prologue-new.jpg';
import prologue6 from '../images/prologue-33.jpg';
import prologue7 from '../images/prologue4.jpg';
import prologue8 from '../images/prologue-horse.jpg';
import prologue9 from '../images/prologue-new1.jpg';
import prologue10 from '../images/lands1.jpg';
import prologue11 from '../images/lands2.jpg';
import { TPrologueScreenType } from './types';
import { TScreen } from './types';

export const SET_USERNAME: 'SET_USERNAME' = 'SET_USERNAME';
export const SET_USERNICK: 'SET_USERNICK' = 'SET_USERNICK';
export const CLEAR_USER: 'CLEAR_USER' = 'CLEAR_USER';
export const SET_PROGRESS: 'SET_PROGRESS' = 'SET_PROGRESS';
export const CLEAR_PROGRESS: 'CLEAR_PROGRESS' = 'CLEAR_PROGRESS';
export const SET_TEMPORARY_PROGRESS: 'SET_TEMPORARY_PROGRESS' =
  'SET_TEMPORARY_PROGRESS';
export const CLEAR_TEMPORARY_PROGRESS: 'CLEAR_TEMPORARY_PROGRESS' =
  'CLEAR_TEMPORARY_PROGRESS';

export const facts = [
  'Пакет союзных договоров между Территориями и Эйсландом продляют раз в пять лет',
  'Сложно поверить, но первая библиотека в Эрнстранде была открыта до возведения городских стен!',
  'Знаете ли вы, что в Согнберге в ходу 14 видов смертной казни только за религиозные преступления?',
  'Ввозная пошлина на алкогольную продукцию в Хуннланге берется товаром',
  'Ввозная пошлина на алкогольную продукцию в Хуннланге берется товаром',
  'На Рыбном рынке Руоваары можно купить технику, оружие, одежду и редкие артефакты из мира Предков',
];

export const prologue: Array<TPrologueScreenType> = [
  {
    pic: prologue2,
    text: 'Они тратили столько электричества, сколько хочется. Строили высоченные дома, ели пищу с других континентов...',
  },
  {
    pic: prologue3,
    text: 'Путешествовали без оружия, могли вылечить любую болезнь...',
  },
  {
    pic: prologue9,
    text: 'Кроме той, которая положила конец их миру.',
  },
  {
    pic: prologue4,
    text: 'С тех пор тут все здорово изменилось. Чертовски изменилось.',
  },
  {
    pic: prologue8,
    text: 'Предкам, наверное, не понравилось бы. Но мы не жалуемся',
  },
  {
    pic: prologue10,
    text: 'Нам есть чем заняться. Но мы не восстанавливаем их мир - мы строим свой',
  },
  {
    pic: prologue5,
    text: 'Хочешь узнать о нем больше?',
  },
];
