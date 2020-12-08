import React from 'react'

// To set the default value in context , pass as a Argument as shown below. Then if the value is not provided in "Provider" default value will print

//const UserContext = React.createContext('Guest');

const UserContext = React.createContext();
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export {UserProvider, UserConsumer} 
export default UserContext
