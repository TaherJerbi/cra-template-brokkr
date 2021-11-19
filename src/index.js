import './i18n'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { store, history } from './app/store'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
import Counter from './pages/Counter/loadable'
import { ReduxRouter } from '@lagunovsky/redux-react-router'
import Login from './pages/Login/'
import useAuth from './auth/authHook'

function PrivateOutlet () {
  const auth = useAuth()
  if (auth()) { return <Outlet/> } else return <Navigate to='/login'/>
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReduxRouter history={history} store={store}>
        <Suspense fallback={<div>Loading ...</div>}>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="/login" element={<Login />}/>
              <Route path="/signin" element={<Login />}/>
              <Route path='/' element={<PrivateOutlet/>}>
                <Route index element={<h1>Welcome to the index page</h1>} />
                <Route path="counter" element={<Counter />} />
              </Route>
            </Route>
              <Route path="*" element={<div>Not Found</div>} />
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
