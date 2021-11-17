import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { createBrowserHistory } from "history";
import { createRouterReducer } from "@lagunovsky/redux-react-router";

export const history = createBrowserHistory();

const configureInjectableStore = (setup) => {
  const store = configureStore(setup);

  store.asyncReducers = {};

  store.injectReducer = (key, asyncReducer) => {
    if (typeof asyncReducer !== "function" || (store.asyncReducers[key] && store.asyncReducers[key] === asyncReducer))
      return;
    store.asyncReducers[key] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers));
  };

  function createReducer(asyncReducers) {
    return combineReducers({
      router: createRouterReducer(history),
      ...asyncReducers,
    });
  }

  return store;
};
const createRootReducer = (history) =>
  combineReducers({
    router: createRouterReducer(history),
  });
export const store = configureInjectableStore({
  reducer: createRootReducer(history),
  devTools: true,
});
