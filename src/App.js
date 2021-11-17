import React, { Suspense } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import './App.css'

function App () {
  const navigate = useNavigate()
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
        <button onClick={() => {
          localStorage.removeItem('auth')
          navigate('/login')
        }}>Click here to logout</button>
      </nav>
      <Suspense fallback="Loading ...">
        {<Outlet />}
      </Suspense>
    </div>
  )
}

export default App
