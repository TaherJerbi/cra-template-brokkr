import React from 'react'
import { connect } from 'react-redux'
import Counter from './Counter'
import injectReducer from '../../utils/injectReducer'
import reducer, { actions, selectCount, selectSum, incrementAsync, incrementIfOdd } from '../../features/counter/counterSlice'
import Helmet from 'react-helmet'
function CounterIndex (props) {
  injectReducer('counter', reducer)
  return (
    <>
      <Helmet>
        <title>Counter</title>
      </Helmet>
      <Counter {...props} />
    </>
  )
}
const mapStateToProps = (state) => ({
  count: selectCount(state),
  sum: selectSum(state)
})
const mapDispatchToProps = {
  ...actions,
  incrementAsync,
  incrementIfOdd
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterIndex)
