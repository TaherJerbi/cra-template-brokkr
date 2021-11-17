import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { store, history } from './app/store'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import { Routes, Route } from 'react-router-dom'
import Counter from './pages/Counter/loadable'
import { ReduxRouter } from '@lagunovsky/redux-react-router'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReduxRouter history={history} store={store}>
        <Suspense fallback={<div>Loading ...</div>}>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<h1>Welcome to the index page</h1>} />
              <Route path="counter" element={<Counter />} />
              <Route path="*" element={<div>Not Found</div>} />
            </Route>
          </Routes>
        </Suspense>
      </ReduxRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
