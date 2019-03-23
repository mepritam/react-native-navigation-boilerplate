import { LOAD_WEATHER, LOAD_WEATHER_SUCCESS } from "./constants";
import { fromJS } from "immutable";

export const initialState = fromJS({
  weather: '',
});

function weatherLoadReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_WEATHER:
      return state;
    case LOAD_WEATHER_SUCCESS:
      return state.set("weather", action.result);
    default:
      return state;
  }
}

export default weatherLoadReducer;