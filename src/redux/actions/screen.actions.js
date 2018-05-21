import {SCREEN_STATES as S_S} from "../constants";

export function setSize(dispatch){
  return {
    handler: ({window})=>{
      let {width, height, portrait} = window;
      width = Math.round(width);
      height = Math.round(height);
      return dispatch({value: {width, height}, type: S_S.SCREEN_ROTATE});
    }
  }
};