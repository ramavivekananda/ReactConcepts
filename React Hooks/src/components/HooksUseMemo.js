import React, { useState, useMemo } from 'react'

function HooksUseMemo() {

    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementCounterOne = () => {        
        setCounterOne(counterOne +1);
    }

    const incrementCounterTwo = () => {
        setCounterTwo(counterTwo +2);
    }

    // const checkOddOrEven = () => {
    //     let i = 0;
    //     while (i < 2000000000) i++;
    //     return counterOne % 2 === 0
    // }

    const checkOddOrEven = useMemo(() => {
        let i = 0;
        while (i < 2000000000) i++;
        return counterOne % 2 === 0
    }, [counterOne])
    return (
        <div>
            <button onClick = {incrementCounterOne} >Counter One - {counterOne} </button>
            <span> {checkOddOrEven ? 'Even' : 'Odd' }</span>
            <br />
            <button onClick = {incrementCounterTwo} >Counter Two - {counterTwo} </button>
        </div>
    )
}

export default HooksUseMemo
