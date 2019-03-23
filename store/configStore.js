import { createStore, applyMiddleware  } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from 'remote-redux-devtools';
import rootSaga from "./sagas";
import rootReducer from "./reducers";


const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
  sagaMiddleware.run(rootSaga);
  return store;
}