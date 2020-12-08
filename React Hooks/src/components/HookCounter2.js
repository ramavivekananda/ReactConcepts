import React, {useState} from 'react';
	
	function HookCounter2() {
       const initialCount = 0;
        const [count, setCount] = useState(initialCount);  //destructuring of arrays
        
        console.log("hooks obj ", useState(count));

        const incrementBy5 = () => {
            for(let i =0;i<5;i++) {
                setCount(prevCount => prevCount+1);
            }
        }
		return ( 
			<div>UseState contains PrevState Manipulation<br />
                <h2>Count {count}</h2>
			<button onClick={()=>setCount(initialCount)}> Reset </button>
            <button onClick={()=>setCount(prevCount => prevCount+1)}> Increment </button>
            <button onClick={()=>setCount(prevCount => prevCount - 1)}> Decrement </button>
            <button onClick={incrementBy5}> Increment By 5</button>
			</div>
			)
		}
		
	export default HookCounter2