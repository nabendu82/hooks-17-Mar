import React, { useContext } from 'react'
import Child from './Child'
import { UserContext, ChannelContext } from '../App'

const Parent = () => {
    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);

    return (
        <div>
            <h1>useContext -{user} - {channel}</h1>
            <Child />
        </div>
    )
}

export default Parent