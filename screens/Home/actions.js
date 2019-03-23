import { LOAD_WEATHER, LOAD_WEATHER_SUCCESS } from "./constants";

export function loadWeather(data) {
  return {
    type: LOAD_WEATHER,
    payload: data
  };
}