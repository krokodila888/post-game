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
import figure1 from '../images/figure1.png';
import figure2 from '../images/figure2.png';
import figure3 from '../images/figure3.png';
import figure6 from '../images/figure6.png';
import figure5 from '../images/figure5.png';
import bandits from '../images/bandits.png';
import albert from '../images/albert.png';
import pub from '../images/pub1.png';
import { TPrologueScreenType } from './types';
import { TScreen } from './types';

export const SET_USERNAME: 'SET_USERNAME' = 'SET_USERNAME';
export const SET_USERNICK: 'SET_USERNICK' = 'SET_USERNICK';
export const CLEAR_USER: 'CLEAR_USER' = 'CLEAR_USER';
export const SET_PROGRESS: 'SET_PROGRESS' = 'SET_PROGRESS';
export const CLEAR_PROGRESS: 'CLEAR_PROGRESS' = 'CLEAR_PROGRESS';
export const SET_TEMPORARY_PROGRESS: 'SET_TEMPORARY_PROGRESS' = 'SET_TEMPORARY_PROGRESS';
export const CLEAR_TEMPORARY_PROGRESS: 'CLEAR_TEMPORARY_PROGRESS' = 'CLEAR_TEMPORARY_PROGRESS';

export const facts = [
  'Пакет союзных договоров между Территориями и Эйсландом продляют раз в пять лет',
  'Сложно поверить, но первая библиотека в Эрнстранде была открыта до возведения городских стен!',
  'Знаете ли вы, что в Согнберге в ходу 14 видов смертной казни только за религиозные прступления?',
  'Ввозная пошлина на алкогольную продукцию в Хуннланге берется товаром',
  'Ввозная пошлина на алкогольную продукцию в Хуннланге берется товаром',
  'На Рыбном рынке Эйсланда можно купить технику, оружие, одежду и редкие артефакты из мира Предков',
];

export const prologue: Array<TPrologueScreenType> = [
  {
    pic: prologue2, 
    text: 'Они тратили столько электричества, сколько хочется. Строили высоченные дома, ели пищу с других континентов...'  
  },
  {
    pic: prologue3, 
    text: 'Путешествовали без оружия, могли вылечить любую болезнь...'
  },
  {
    pic: prologue9, 
    text: 'Кроме той, которая положила конец их миру.'
  },
  {
    pic: prologue4, 
    text: 'С тех пор тут все здорово изменилось. Чертовски изменилось.'
  },
  {
    pic: prologue8, 
    text: 'Предкам, наверное, не понравилось бы. Но мы не жалуемся'
  },
  {
    pic: prologue10, 
    text: 'Нам есть чем заняться. Но мы не восстанавливаем их мир - мы строим свой'
  },
  /*{
    pic: prologue6, 
    text: 'Нам есть чем заняться. Но мы не восстанавливаем их мир - мы строим свой'
  },*/
  {
    pic: prologue5, 
    text: 'Хочешь узнать о нем больше?'
  },

];

export const module1:Array<TScreen> = [
    {
      turn: 1,
      pic: pub, 
      text1: 'Голова у меня гудит. Вчерашняя пьянка была что надо - жаль, я не слишком хорошо ее помню. Кстати, сейчас полдень или?..',
      screenType: 'simple',
      figure: null,
    },
    {
      turn: 2,
      pic: pub, 
      text1: 'Помню мало, хоть убейте. Я в Андерстаде - это дыра на востоке Территорий по пути к Магистрали. Хотелось скрасить вечер, чтоб его...',
      screenType: 'simple',
      figure: null,
    },
    {
      turn: 3,
      pic: pub, 
      text1: 'По крайней мере, пушки при мне. Насчет бумажника сомневаюсь, но вначале надо что-нибудь выпить.',
      screenType: 'simple',
      figure: null,
    },
    {
      turn: 4,
      pic: pub,  
      text1: 'Тут же наливают постояльцам хотя бы воду, правда?..',
      screenType: 'simple',
      figure: null,
    },
    {
      turn: 5,
      pic: pub,  
      text1: `- Эй, это ведь ты ${localStorage.getItem('userNick')}?`,
      text2: 'Боже, кому я нужен?..',
      screenType: 'simple',
      figure: null,
    },
    {
      turn: 6,
      pic: pub,  
      text1: `- Это вас берут проводником, если хотят пройти Костяной перевал без жертв?..`,
      screenType: 'choise',
      button1: {
        text: '- А какой у вас груз? Это недешево.',
        mark: 1
      },
      button2: {
        text: '- Я уже не работаю в тех краях.',
        mark: 2
      },
      button3: {
        text: 'Сделать сложное лицо',
        mark: 3
      },
      figure: {
        url: figure1,
        position: 'game__figure2'
      }
    },
    {
      turn: 7,
      pic: pub,  
      text1: `- Ты ${localStorage.getItem('userNick')}, который возит в Согнберг выпивку под носом у Стражей?`,
      screenType: 'choise',
      button1: {
        text: '- И не только выпивку. И вот кстати...',
        mark: 1
      },
      button2: {
        text: `- Нет, это был другой ${localStorage.getItem('userNick')}.`,
        mark: 2
      },
      button3: {
        text: 'Покоситься в сторону выпивки',
        mark: 3
      },
      figure: {
        url: figure2,
        position: 'game__figure'
      }
    },
    {
      turn: 8,
      pic: pub,  
      text1: `Вот что значит популярность.`,
      text2: `Хоть кто-нибудь здесь принесет мне выпить?..`,
      screenType: 'simple',
      figure: null
    },
    {
      turn: 9,
      pic: pub,  
      text1: `- Это ведь к вам обращаются, если нужно вывезти человека из Новой Алои?..`,
      screenType: 'choise',
      button1: {
        text: '- О таком не говорят с незнакомцами. Но мы можем познакомиться.',
        mark: 1
      },
      button2: {
        text: `- Вы ничего не докажете.`,
        mark: 2
      },
      button3: {
        text: 'Движением брови дать понять, что не намерен отвечать на сухое горло.',
        mark: 3
      },
      figure: {
        url: figure5,
        position: 'game__figure2'
      }
    },
    {
      turn: 10,
      pic: pub,  
      text1: `- А это за твою голову концерн Солано обещает 500 крон и личную благодарность их капо?`,
      screenType: 'choise',
      button1: {
        text: '- 500 крон? Покажите мне идиота, который согласится.',
        mark: 1
      },
      button2: {
        text: `- Им нужен какой-то другой ${localStorage.getItem('userNick')}. Удачи ему.`,
        mark: 2
      },
      button3: {
        text: 'Многозначительно промолчать',
        mark: 3
      },
      figure: {
        url: figure6,
        position: 'game__figure'
      }
    },
    {
      turn: 11,
      pic: pub,  
      text1: `Ну да, я ${localStorage.getItem('userName')} ${localStorage.getItem('userNick')}. Я решаю проблемы.`,
      text2: 'Если вы обо мне не слышали, значит, у вас еще не было проблем.',
      screenType: 'simple',
      figure: null,
    },
    {
      turn: 12,
      pic: pub,  
      text1: `Что-то с тихим стеклянным стуком опускается на мой столик. Неужели это?..`,
      screenType: 'simple',
      figure: null
    },
    {
      turn: 13,
      pic: pub,
      text1: `Боже, наконец-то. Не местный эль, но какое-то чуть теплое травяное пойло. Отлично утоляет жажду.`,
      text2: `Нет, мне хватило выдержки сначала принюхаться, а только потом выхлебать половину. За кого вы меня принимаете?..`,
      screenType: 'simple',
      figure: null,
    },
    {
      turn: 14,
      pic: pub,
      text1: `...Итак, у кого в этой дыре еще осталось сердце?..`,
      text2: `Если это было начало переговоров, сделаю ему скидку.`,
      screenType: 'simple',
      figure: null,
    },
    {
      turn: 15,
      pic: pub,
      text1: `Оторвавшись от кружки, я вижу только спину с ремнями кобуры - он уходит за свой дальний столик.`,
      text2: `Похоже, это был акт чистого великодушия.`,
      screenType: 'simple',
      figure: {
        url: albert,
        position: 'game__figure4'
      },
    },
    {
      turn: 16,
      pic: pub,  
      text1: `Этот парень был здесь вчера.`,
      text2: `Выглядит как местный шериф или маршал - или тот, кто прикончил местного маршала.`,
      screenType: 'simple',
      figure: {
        url: albert,
        position: 'game__figure4'
      },
      button1: {
        text: '- Спасибо, друг.',
      },
    },
    {
      turn: 17,
      pic: pub,  
      text1: `- Будь здоров, ${localStorage.getItem('userNick')}.`,
      text2: `Хм, так мы уже знакомы.`,
      screenType: 'simple',
      figure: {
        url: albert,
        position: 'game__figure4'
      },
      button1: {
        text: 'Салютую ему полупустой кружкой.',
      },
    },
    {
      turn: 18,
      pic: pub,  
      text1: `...Знаете, иногда даже дверь хлопает так, что делается ясно: будет заварушка.`,
      text2: `Бывает такая ритмика походки. В Пустошах привыкаешь слышать такие вещи.`,
      screenType: 'simple',
      figure: null,
    },
    {
      turn: 19,
      pic: pub,  
      text1: `Особенно когда заходят сразу трое - вот такие.`,
      text2: `В воздухе запахло проблемами , пылью и конским потом.`,
      screenType: 'simple',
      figure: {
        url: bandits,
        position: 'game__figure3'
      }
    },
    {
      turn: 20,
      pic: pub,  
      text1: `Здесь игра пока заканчивается.`,
      text2: `Но скоро история двинется дальше!`,
      screenType: 'endpoint',
      next: 'Prologue. Part 2',
      figure: null,
      button1: {
        text: 'На главную',
      },
    },
  ];