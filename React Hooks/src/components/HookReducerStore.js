import React, {useReducer, createContext, useContext} from 'react'


const initialState = {
    firstCounter:0,
    secondCounter:0
}
const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return {...state, firstCounter:state.firstCounter + action.value};
        case 'decrement' :
            return { ...state,firstCounter: state.firstCounter - action.value};
        case 'incrementBy5':
            return {...state,secondCounter:state.secondCounter + action.value};
        case 'decrementBy5' :
            return { ...state,secondCounter: state.secondCounter - action.value};
        case 'reset' : 
        console.log("initial State ", initialState);
            return initialState;

        default :
            return state;
    }
}

const StoreContext = createContext(null);

export function StoreProvider({children}) {
    const [state, dispatch] = useReducer(reducer,initialState);
    const value = {state, dispatch};

    return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export const useStore = () => useContext(StoreContext);