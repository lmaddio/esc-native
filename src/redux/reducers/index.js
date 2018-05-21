import { combineReducers } from 'redux';

import {setScreenSize} from "./screen.reducers";
import {setListDataRed, setPutState} from "./data.reducer";
import {selectedItemsRed} from "./items-list.reducer";

const rootReducer = combineReducers({
  setScreenSize,
  setListDataRed,
  setPutState,
  selectedItemsRed
});
export default rootReducer;