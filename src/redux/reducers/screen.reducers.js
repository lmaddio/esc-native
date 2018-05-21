import {SCREEN_STATES as S_S} from "../constants";

const INITIAL_STATE = {};

export function setScreenSize(state=INITIAL_STATE, action) {
  const {value, type} = action;
  switch(type) {
    case S_S.SCREEN_INITIAL:
      return {
        value
      };
    case S_S.SCREEN_ROTATE:
      return {
        ...value
      };
    default:
      return state;
  }
}