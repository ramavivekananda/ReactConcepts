import React from 'react'
import {userNameContext, channelContext} from '../App'

function UseEffectCompF() {
    return (
        <div>
        <userNameContext.Consumer>
            { 
            user => {
              return (
                  <channelContext.Consumer>
                      {
                          (channel) => {
                              return (
                                <div> 
                                <h2>Fetch using Normal Context</h2>
                               <span>   Values from UserContext {user} </span>
                               <br />
                               <span>   Values from ChannelContext {channel} </span>
                              </div>
                              )
                          }
                      }
                  </channelContext.Consumer>               
                )
            } }   
        </userNameContext.Consumer>
        </div>
    )
}

export default UseEffectCompF
