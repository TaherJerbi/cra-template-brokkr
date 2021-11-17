import React, { Suspense } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App () {
  return (
    <div className="App">
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          background: 'lightgreen',
          padding: 10
        }}
      >
        <Link to="/counter">Counter</Link>
        <Link to="/">INDEX</Link>
      </nav>
      <Suspense fallback="Loading ...">
        <Outlet />
      </Suspense>
    </div>
  )
}

export default App
