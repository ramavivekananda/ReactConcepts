import React, { useState } from 'react'
import HooksCustomInput from './HooksCustomInput';

function HooksCustomUserForm() {

    //const [firstName, setFirstName] = useState('');
    //const [lastName, setLastName] = useState('');

    const [firstName, setFirstName, resetFirstName] = HooksCustomInput('', 'text');
    const [lastName, setLastName, resetLastName] = HooksCustomInput('', 'password');


    const submitHandler = e => {
        console.log("coming inside");
        e.preventDefault();
        alert(`FirstName ${firstName} -- LastName ${lastName}`);
        resetFirstName();
        resetLastName();
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>FirstName</label>
                    {/* <input 
                    type="text" 
                    value={firstName}
                    onChange={e=> setFirstName(e.target.value)} /> */}
                    <input  {...setFirstName} />
                </div>
                <div>
                    <label>LastName</label>
                    {/* <input 
                    type="text"
                    value={lastName}
                    onChange={e=> setLastName(e.target.value)} /> */}
                    <input {...setLastName} />
                </div>
                <button >Submit</button>
            </form>
           
        </div>
    )
}

export default HooksCustomUserForm

