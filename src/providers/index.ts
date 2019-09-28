import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import config from "../config";
import { monitorReducerEnhancer } from "./enhancers";
import { loggerMiddleware } from "./middleware";
import rootReducer, { rootInitialState } from "./reducers";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  const preloadedState = JSON.parse(
    window.localStorage.getItem(config.LOCALSTORAGE_KEY) ||
      JSON.stringify(rootInitialState)
  );
  const middlewares = [loggerMiddleware, thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer, monitorReducerEnhancer];
  const composedEnhancers: any = composeEnhancers(...enhancers);
  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  store.subscribe(() => {
    const state = store.getState();
    const savedState = JSON.stringify(state, null, 2);

    window.localStorage.setItem(config.LOCALSTORAGE_KEY, savedState);
  });

  return store;
}

export * from "./game";
export * from "./helpers";
