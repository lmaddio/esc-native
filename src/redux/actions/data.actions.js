import {
  DATA_REQUEST_STATE as DATA_REQ,
  SEND_DATA,
  LIST_STATES
} from '../constants';
import {getListData, setNewStatus} from '../services';

const fetchDataBegin = () => ({
  type: DATA_REQ.DATA_REQUESTING
});

const fetchDataSuccess = data => ({
  type: DATA_REQ.DATA_SUCCESS,
  payload: {data}
});

const fetchDataError = error => ({
  type: DATA_REQ.DATA_ERROR,
  payload: { error }
});

export function requestListData(dispatch){
  return {
    getListData: async ()=>{
      dispatch(fetchDataBegin());
      const {error, data} = await getListData() || {};
      return dispatch(!data ? fetchDataError(error  || "Failed to fetch") : fetchDataSuccess(data));
    }
  }
}

const putDataRequest = () => ({
  type: SEND_DATA.PUT_REQUESTING
});

const putDataSuccess = data => ({
  type: SEND_DATA.PUT_SUCCESS,
  payload: {data}
});

const putDataError = error => ({
  type: SEND_DATA.PUT_ERROR,
  payload: { error }
});


export function sendNewStatus(dispatch) {
  return {
    sendNewStatus: async (items, newState)=>{
      const _items = items.map(i=>({...i, status: newState}));
      dispatch(putDataRequest());
      const {error, data} = await setNewStatus(_items) || {};
      if(!data)
        dispatch(putDataError(error || "Failed to put"));
      else 
        dispatch(putDataSuccess(data));
      dispatch({type: LIST_STATES.LIST_CLEAR});
    }
  }
} 