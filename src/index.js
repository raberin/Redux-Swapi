import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
// applyMiddleware from redux
import { createStore, applyMiddleware } from "redux";
// needed dependancies
// thunk from redux-thunk
import thunk from "redux-thunk";
// logger from redux-logger
import logger from "redux-logger";
// rootReducer from ./reducers
import combineReducers from "./reducers";

const store = createStore(combineReducers, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
