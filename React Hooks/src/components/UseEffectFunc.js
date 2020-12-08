import React, {useState, useEffect} from 'react';
	
	function UseEffectFunc() {
        const [userName, setName] = useState('');
        const [count, setCount] = useState(0);

        useEffect(() => {
            console.log("use Effect - Updating document title");
            document.title = `you clicked ${count} times`;
        }, [count]);

        // < For conditional rendering only when changes occur the use Effect will call>
        // useEffect(() => {
        //     console.log("use Effect - Updating document title");
        //     document.title = `you clicked ${count} times`;
        // }, [count]);

         // <  only call UseEffect at the time of loading, then pass empty array>
        // useEffect(() => {
        //     console.log("use Effect - Updating document title");
        //     document.title = `you clicked ${count} times`;
        // }, []);


		return (
			<div><h3>Using UseEffect Functional Component </h3>
			<input type="text" value={userName} onChange={e => setName(e.target.value)} />
            <button onClick={()=> setCount(count+1)}>Clicked {count} times</button>
			</div>
			)
		}
		
	export default UseEffectFunc