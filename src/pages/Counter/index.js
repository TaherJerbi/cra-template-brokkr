import { connect } from "react-redux";
import Counter from './Counter';
import injectReducer from '../../utils/injectReducer';
import counterReducer, {
    decrement,
    increment,
    incrementByAmount,
    incrementAsync,
    incrementIfOdd,
    selectCount,
    selectSum,
  } from '../../features/counter/counterSlice';
function CounterIndex (props){
    injectReducer('counter',counterReducer);
    return <Counter {...props}/>
}
const mapStateToProps = (state) => ({
    count: selectCount(state),
    sum: selectSum(state)
})
const mapDispatchToProps = {
    decrement,
    increment,
    incrementByAmount,
    incrementAsync,
    incrementIfOdd,
}

export default connect(mapStateToProps,mapDispatchToProps)(CounterIndex);