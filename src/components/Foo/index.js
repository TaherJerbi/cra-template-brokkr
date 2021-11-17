import React from 'react'
import { connect } from 'react-redux'
import Foo from './Foo'
// import injectReducer from '../../utils/injectReducer'
import { actions } from '../../features/counter/counterSlice'

function FooIndex (props) {
  // injectReducer('counter', reducer)
  return (
    <>
      <Foo {...props} />;
    </>
  )
}
const mapStateToProps = (state) => ({
  // use Selectors from slice.
})
const mapDispatchToProps = {
  ...actions
}

export default connect(mapStateToProps, mapDispatchToProps)(FooIndex)
