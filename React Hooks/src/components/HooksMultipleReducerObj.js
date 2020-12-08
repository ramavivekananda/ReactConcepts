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
function HooksMultipleReducerObj() {
    
   const [countOne, dispatch] = useReducer(reducer, initialState);
   const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
    return (
        <div>
            CountOne - {countOne} <br />
            CountTwo - {countTwo}<br />
        <button onClick = {()=> dispatch('increment')}>Increment</button>  
        <button onClick = {()=> dispatch('decrement')}>decrement</button>  
        <button onClick = {()=> dispatch('reset')}>Reset</button>        
        <br />
        <button onClick = {()=> dispatchTwo('increment')}>Increment</button>  
        <button onClick = {()=> dispatchTwo('decrement')}>decrement</button>  
        <button onClick = {()=> dispatchTwo('reset')}>Reset</button>        
        </div>
    )
}

export default HooksMultipleReducerObj
   