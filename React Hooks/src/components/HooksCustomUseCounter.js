import {useState} from 'react'

function HooksCustomUseCounter(initialState = 0) {
   
    const [count, setCount] = useState(initialState);
    
    const incrementCount = () => {
        setCount(prevState => 
           prevState + 1 
        )
    }

    const decrementCount = () => {
        setCount(prevState => 
           prevState - 1 
        )
    }

    const reset = () => {
        setCount(initialState);
    }
    return [count, incrementCount, decrementCount, reset];
}

export default HooksCustomUseCounter
