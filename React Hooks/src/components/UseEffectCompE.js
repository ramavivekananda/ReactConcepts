import React, {useContext} from 'react'
import UseEffectCompF from './UseEffectCompF'
import { userNameContext, channelContext } from '../App'

function UseEffectCompE() {
    const user =useContext(userNameContext);
    const channel = useContext(channelContext);
    return (
        <div>
            <h3>Fetch context value using Hooks</h3>
            <span> userNameContext --> {user} , channelContext --> {channel}</span> <br />
            <UseEffectCompF />
        </div>
    )
}

export default UseEffectCompE
