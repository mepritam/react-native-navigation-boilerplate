import{
  takeLatest,
  take,
  call,
  put,
  select,
  takeEvery
} from "redux-saga/effects";

import { LOAD_WEATHER, LOAD_WEATHER_SUCCESS  } from "./constants";

export default function* loadWeather(){
  yield takeLatest(LOAD_WEATHER, doLoadWeather);
}

export function* doLoadWeather(){
  yield put({ type: LOAD_WEATHER_SUCCESS });
}