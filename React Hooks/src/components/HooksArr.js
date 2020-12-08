import React, {useState, Fragment} from 'react';
	
	function HookArr() {

        const [items, setItems] = useState([]);
        const addItems = ()=> {
            setItems([...items, {
                   id:items.length, 
                    value:Math.floor(Math.random()*8)+1 
                }])
        }
		return (
            <div>UseState of Array Manipulation<br />
            <button onClick={addItems}>Add Items</button>
            <ul> 
            { 
            items.map(item=> ( <li key={item.id}>{item.value}</li>))
            
            }
           </ul>
           </div>
			)
		}
		
	export default HookArr
	
	