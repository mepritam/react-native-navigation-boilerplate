import{
  takeLatest,
  take,
  call,
  put,
  select,
  takeEvery
} from "redux-saga/effects";

import { LOAD_WEATHER, LOAD_WEATHER_SUCCESS  } from "./constants";
import {API_GATEWAY,API_KEY} from "react-native-dotenv";
import axios from "axios";

export default function* loadWeather(){
  yield takeLatest(LOAD_WEATHER, doLoadWeather);
}

export function* doLoadWeather(data){
  const city_name = data.payload;

  // do call API call
  try {
    const result = yield call(() => {
        return axios({
            method: 'GET',
            url: API_GATEWAY+city_name+API_KEY+'&units=celcius',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                return response.data
            })
            .catch(error => {
                console.log(error);
            });
    });

    yield put({type: LOAD_WEATHER_SUCCESS, result})
}
catch (err) {
    console.log(err);
}
 // yield put({ type: LOAD_WEATHER_SUCCESS });
}