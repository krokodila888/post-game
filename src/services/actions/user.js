import {
    SET_USER,
    CLEAR_USER,
    SET_PROGRESS,
    CLEAR_PROGRESS,
    SET_TEMPORARY_PROGRESS,
    CLEAR_TEMPORARY_PROGRESS,
  } from "../../utils/constants";
  
export function setUser(data) {
  return {
    type: SET_USER,
    item: data
  }
}
  
export function clearUser() {
  return {
    type: CLEAR_USER
  }
} 

export function setProgress(data) {
  return {
    type: SET_PROGRESS,
    item: data
  }
}

export function clearProgress() {
    return {
      type: CLEAR_PROGRESS
    }
  } 

export function setTemporaryProgress(data) {
  return {
    type: SET_TEMPORARY_PROGRESS,
    item: data
  }
}
  
export function clearTemporaryProgress() {
  return {
    type: CLEAR_TEMPORARY_PROGRESS
  }
} 
  