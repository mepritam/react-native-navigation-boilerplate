import { LOAD_WEATHER, LOAD_WEATHER_SUCCESS } from "./constants";
import { fromJS } from "immutable";

export const initialState = fromJS({
  users: '',
  tester: ''
});

function weatherLoadReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_WEATHER:
      return state.set("users", "Pritam");
    case LOAD_WEATHER_SUCCESS:
      return state.set("users", "Pritam Sadhu");
    default:
      return state;
  }
}

export default weatherLoadReducer;