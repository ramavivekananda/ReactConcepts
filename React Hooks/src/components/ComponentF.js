import React from 'react'
import { UserConsumer } from './UserContext'

function ComponentF() {
 return (
       <UserConsumer>
           {(userName) => {
              return <h2>Hello {userName}</h2>
           }}
       </UserConsumer>
    )
    
}

export default ComponentF
