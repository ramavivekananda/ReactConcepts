import React from 'react';
import HooksCustomUseCounter from './HooksCustomUseCounter';

function HooksCustomCounter1() {

    const [count, incrementCount, decrementCount, reset] = HooksCustomUseCounter();
    // const [count, setCount] = useState(0);
    
    // const incrementCount = () => {
    //     setCount(prevState => 
    //        prevState + 1 
    //     )
    // }

    // const decrementCount = () => {
    //     setCount(prevState => 
    //        prevState - 1 
    //     )
    // }

    // const reset = () => {
    //     setCount(0);
    // }

	
	return (
      <div>  <h4>Counter1 count - {count} </h4>
	<button onClick={incrementCount}> Increment </button><br />
    <button onClick={decrementCount}> Decrement </button><br />
    <button onClick={reset}> Reset </button>
    </div>
    )
}
	
	
	export default HooksCustomCounter1