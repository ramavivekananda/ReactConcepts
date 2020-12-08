import React, {useReducer} from 'react'


const initialState = 0;
const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1;
        case 'decrement' :
            return state - 1;
        case 'reset' : 
            return initialState;

        default :
            return state;
    }
}
function HookReducer() {
   
   const [count, dispatch1] = useReducer(reducer, initialState);
    return (
        <div>
            Count - {count}
        <button onClick = {()=> dispatch1('increment')}>Increment</button>  
        <button onClick = {()=> dispatch1('decrement')}>decrement</button>  
        <button onClick = {()=> dispatch1('reset')}>Reset</button>        
        </div>
    )
}

export default HookReducer
   