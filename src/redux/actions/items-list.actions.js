import {LIST_STATES as LIST_S} from '../constants';
import {getListData} from '../services';

export function selectAction(dispatch){
  return {
    actions: {
      select: obj=>{
        dispatch({type: LIST_S.LIST_SELECT, payload: obj});
      },
      clear: ()=>{
        dispatch({type: LIST_S.LIST_CLEAR});
      }
    }
  }
};