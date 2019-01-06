import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import newsCategory from "../reducers/NewsCategoryReducer";
import thunk from 'redux-thunk';

const store = createStore(
  combineReducers({  newsCategory }),
  compose(applyMiddleware(thunk,createLogger()))
);

export default store;
