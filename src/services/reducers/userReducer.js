import {
    SET_USERNAME,
    SET_USERNICK,
    CLEAR_USER,
    SET_PROGRESS,
    CLEAR_PROGRESS,
    SET_TEMPORARY_PROGRESS,
    CLEAR_TEMPORARY_PROGRESS,
  } from "../../utils/constants";
  
  const initialState = {
    userName: null,
    userNick: null,
    progress: null,
    temporaryProgress: null,
  }
  
  export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_USERNAME:
        return {
          ...state,
          userName: action.item
        }
      case SET_USERNICK:
        return {
          ...state,
          userNick: action.item
        }
      case SET_PROGRESS:
        return {
          ...state,
          progress: action.item,
        }
      case SET_TEMPORARY_PROGRESS:
        return {
          ...state,
          temporaryProgress: action.item,
        }
      case CLEAR_PROGRESS:
        return {
          ...state,
          progress: null,
          temporaryProgress: null,
        }
      case CLEAR_TEMPORARY_PROGRESS:
        return {
          ...state,
          temporaryProgress: null,
        }
      case CLEAR_USER:
        return initialState
      default: {
        return state
      }
    }
  } 
  