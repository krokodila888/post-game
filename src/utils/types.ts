export type TScreenButton = {
  text: string;
  mark?: number;
};

export type TScreenFigure = {
  url: string,
  position: string,
}

export type TScreen = {
  turn: number;
  pic: string;
  text1: string;
  text2?: undefined | string;
  screenType: string;
  figure: null | TScreenFigure;
  button1?: undefined | TScreenButton;
  button2?: undefined | TScreenButton;
  button3?: undefined | TScreenButton;
  keyId?: string;
  id?: string;
  index?: number;
  type1?: string;
  count?: number;
  next?: string;
};

export type TNickList = {
  nick: string;
};

export type TParts = {
  name: string;
  module: Array<TScreen>
}

export type TPrologueScreenType = {
  pic: string,
  text: string,
}