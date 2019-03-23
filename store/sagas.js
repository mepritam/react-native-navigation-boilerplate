import loadWeather  from "../screens/Home/saga";
import { put, takeEvery, all } from 'redux-saga/effects'

export default function* rootSaga() {
  console.log("saga")
  yield all([
    loadWeather(),
  ])
}