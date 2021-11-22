import React from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import injectReducer from '../../utils/injectReducer'
import reducer, { actions, counterDomainSelector } from '../../features/counter/counterSlice'
import Helmet from 'react-helmet'
function LoginIndex (props) {
  injectReducer('counter', reducer)
  return (
    <>
      <Helmet>
        Login
      </Helmet>
      <Login {...props} />
    </>
  )
}
const mapStateToProps = (state) => ({
  counter: counterDomainSelector
})
const mapDispatchToProps = {
  ...actions
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginIndex)
