import React from 'react'
import { UserContext, ChannelContext } from '../App'

const Child = () => {
    return (
        <>
            <UserContext.Consumer>
                {user => {
                    return (
                        <ChannelContext.Consumer>
                            {channel => {
                                return (
                                    <div>
                                        <h2>{user} is listening to {channel}</h2>
                                    </div>
                                )
                            }}
                        </ChannelContext.Consumer>
                    )
                }}
            </UserContext.Consumer>
        </>
    )
}

export default Child