import React, { useState, useEffect } from 'react'

function UseEffectProperDependency() {
    const [count,setCount] = useState(0);

    function tick() {
        setCount((prevCount) =>  prevCount+1);
    }

    useEffect(() => {
        const intervalTick = setInterval(tick, 1000);
        return () => {
            clearInterval(intervalTick);
        };
    }, []);
    return (
        <div>
           {count}
        </div>
    )
}

export default UseEffectProperDependency
