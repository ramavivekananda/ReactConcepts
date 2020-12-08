import React, {useState} from 'react';
	
	function HookObj() {

        const [name, setName] = useState({firstName:'', lastName:''})
		return (
            <div>UseState of Object Manipulation<br />
            <form>
                <div><label>FirstName : </label>
                    <input type="text" value={name.firstName} onChange={e=> setName({...name, firstName:e.target.value})} />
                    
                </div>
                <div><label>LastName : </label>
                    <input type="text" value={name.lastName} onChange={e=> setName({...name, lastName:e.target.value})} />
                    
                </div>
                {JSON.stringify(name)}
            </form>
			</div>
			)
		}
		
	export default HookObj
	
	