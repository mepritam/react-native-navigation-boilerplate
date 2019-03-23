import { combineReducers } from "redux-immutable";

import weatherLoadReducer from "../screens/Home/reducer";




export default (rootReducer = combineReducers({
  weather: weatherLoadReducer
}));