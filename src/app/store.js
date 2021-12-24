import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { createBrowserHistory } from 'history'
import { createRouterReducer } from '@lagunovsky/redux-react-router'
import { pokemonApi } from '../services/pokemonAPI'

export const history = createBrowserHistory()

const configureInjectableStore = (setup) => {
  const store = configureStore(setup)

  store.asyncReducers = {}

  store.injectReducer = (key, asyncReducer) => {
    if (typeof asyncReducer !== 'function' || (store.asyncReducers[key] && store.asyncReducers[key] === asyncReducer)) { return }
    store.asyncReducers[key] = asyncReducer
    store.replaceReducer(createReducer(store.asyncReducers))
  }

  function createReducer (asyncReducers) {
    return combineReducers({
      ...rootReducerObject(history),
      ...asyncReducers
    })
  }

  return store
}
const createRootReducer = (history) =>
  combineReducers(rootReducerObject(history))
const rootReducerObject = (history) => ({
  router: createRouterReducer(history),
  [pokemonApi.reducerPath]: pokemonApi.reducer
})
export const store = configureInjectableStore({
  reducer: createRootReducer(history),
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware)
})

// RTK QUERY
// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization

// setupListeners(store.dispatch)
