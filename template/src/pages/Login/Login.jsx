import React from 'react'
import { useNavigate } from 'react-router'
// import PropTypes from 'prop-types'

function Login () {
  const navigate = useNavigate()
  return (
  <div>
    Login
    <button onClick={() => {
      localStorage.setItem('auth', true)
      navigate('/', { replace: true })
    }}>Click here to login</button>

  </div>
  )
}

// Login.propTypes = {}

export default Login
