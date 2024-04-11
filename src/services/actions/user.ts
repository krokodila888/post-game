import {
    SET_USERNAME,
    SET_USERNICK,
    CLEAR_USER,
    SET_PROGRESS,
    CLEAR_PROGRESS,
    SET_TEMPORARY_PROGRESS,
    CLEAR_TEMPORARY_PROGRESS,
  } from "../../utils/constants";

export interface ISetUserName {
  readonly type: typeof SET_USERNAME;
  readonly item: string;
}
  
export interface ISetUserNick {
  readonly type: typeof SET_USERNICK;
  readonly item: string;
}

export interface IClearUser {
  readonly type: typeof CLEAR_USER;
}

export interface ISetProgress {
  readonly type: typeof SET_PROGRESS;
  readonly item: string;
}

export interface IClearProgress {
  readonly type: typeof CLEAR_PROGRESS;
}

export interface ISetTemporaryProgress {
  readonly type: typeof SET_TEMPORARY_PROGRESS;
  readonly item: string;
}

export interface IClearTemporaryProgress {
  readonly type: typeof CLEAR_TEMPORARY_PROGRESS;
}

export type TUserActions = 
  | ISetUserName
  | ISetUserNick
  | ISetProgress
  | ISetTemporaryProgress
  | IClearUser
  | IClearProgress
  | IClearTemporaryProgress

export const setUserName = (item: string): ISetUserName => ({
  type: SET_USERNAME,
  item
}); 

export const setUserNick = (item: string): ISetUserNick => ({
  type: SET_USERNICK,
  item
});

export const clearUser = (): IClearUser=> ({
  type: CLEAR_USER
}); 

export const setProgress = (item: string): ISetProgress => ({
  type: SET_PROGRESS,
  item
});

export const clearProgress = (): IClearProgress => ({
  type: CLEAR_PROGRESS
}); 

export const setTemporaryProgress = (item: string): ISetTemporaryProgress => ({
  type: SET_TEMPORARY_PROGRESS,
  item
});

export const clearTemporaryProgress = (): IClearTemporaryProgress => ({
  type: CLEAR_TEMPORARY_PROGRESS
}); 
