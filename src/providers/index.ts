import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import config from "../config";
import { monitorReducerEnhancer } from "./enhancers";
import { loggerMiddleware } from "./middleware";
import rootReducer from "./reducers";

export default function configureStore() {
  const preloadedState = JSON.parse(
    window.localStorage.getItem(config.LOCALSTORAGE_KEY) || "0"
  );
  const middlewares = [loggerMiddleware, thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer, monitorReducerEnhancer];
  const composedEnhancers: any = compose(...enhancers);
  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  store.subscribe(() => {
    const state = store.getState();
    const savedState = JSON.stringify(state, null, 2);

    window.localStorage.setItem(config.LOCALSTORAGE_KEY, savedState);
  });

  return store;
}
