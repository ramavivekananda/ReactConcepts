import React, {useReducer} from 'react'


const initialState = {
    firstCounter:0,
    secondCounter:10
}
const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return {...state, firstCounter:state.firstCounter + action.value};
        case 'decrement' :
            return { ...state,firstCounter: state.firstCounter - action.value};
        case 'incrementBy5':
            return {...state,secondCounter:state.secondCounter + action.value};
        case 'decrementBy5' :
            return { ...state,secondCounter: state.secondCounter - action.value};
        case 'reset' : 
        console.log("initial State ", initialState);
            return initialState;

        default :
            return state;
    }
}
function HookReducerObj() {
    
   const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
           <h4> FirstCounter - {count.firstCounter}</h4>
           <h4> SecondCounter - {count.secondCounter}</h4>
        <button onClick = {()=> dispatch({type:'increment', value:1})}>Increment</button>  
        <button onClick = {()=> dispatch({type:'decrement', value:1})}>decrement</button>  
        {/* <button onClick = {()=> dispatch({type:'reset'})}>Reset</button>    */}
        <br />
        <button onClick = {()=> dispatch({type:'incrementBy5', value:5})}>Increment By 5</button>  
        <button onClick = {()=> dispatch({type:'decrementBy5', value:5})}>decrement By 5</button>

        <br />
        <button onClick = {()=> dispatch({type:'reset'})}>Reset</button>        
        </div>
    )
}

export default HookReducerObj
   