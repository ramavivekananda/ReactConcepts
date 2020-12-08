import React from 'react'
import {useStore} from './HookReducerStore'

export function Hookreducerstoreexample(props) {
   
        const { state, dispatch } = useStore();
      
        return (
          <section className="counter">
            <div className="value">firstCounter : {state.firstCounter}</div>
            <div className="value">secondCounter : {state.secondCounter}</div>
            <button onClick={() => dispatch({ type: 'increment', value:1 })}>First Counter Increment</button>
            <button onClick={() => dispatch({ type: 'incrementBy5', value:5 })}>Second Counter Increment</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
          </section>
        );
      }

  