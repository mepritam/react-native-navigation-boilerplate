import { createSelector } from "reselect";

const selectWeather = state => state.get("weather");
const weatherSelector = () =>
  createSelector(
    selectWeather,
    state => state.toJS()
  );

const getWeather = () =>
  createSelector(selectWeather, state => state.get('weather'));


export { weatherSelector, getWeather }