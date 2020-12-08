import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import User from './components/User';
import Counter from './components/Counter';
import HookCounter1 from './components/HookCounter1';
import HookCounter2 from './components/HookCounter2';
import HookObj from './components/HookObj';
import HookArr from './components/HooksArr';
import UseEffectClass from './components/UseEffectClass';
import UseEffectFunc from './components/UseEffectFunc';
import UseEffectFetchApi from './components/UseEffectFetchApi';
import PureComp from './components/PureComp';
import ErrorBoundaryComp from './components/ErrorBoundaryComp';
import ErrorBoundary from './components/ErrorBoundary';
import { UserProvider, UserConsumer } from './components/UserContext';
import ComponentC from './components/ComponentC';
import UseEffectProperDependency from './components/UseEffectProperDependency';
import UseEffectCompC from './components/UseEffectCompC';
import HookReducer from './components/HookReducer';
import HookReducerObj from './components/HookReducerObj';
import HooksMultipleReducerObj from './components/HooksMultipleReducerObj';
import HooksCustomCounter1 from './components/HooksCustomCounter1';
import HooksCustomCounter2 from './components/HooksCustomCounter2';
import HooksCustomUserForm from './components/HooksCustomUserForm';
import HocClickCounter from './components/HocClickCounter';
import HocHoverCounter from './components/HocHoverCounter';
import HooksUseMemo from './components/HooksUseMemo';

import {StoreProvider} from './components/HookReducerStore'
import { Hookreducerstoreexample } from './components/HookReducerStoreExample';
import Hookreducergetstoreobj from './components/HookReducerGetStoreObj';

/* Use Effect with Context  */
export  const userNameContext = React.createContext();
export  const channelContext = React.createContext('code');
class App extends Component {

  
  render() {
    return (
      <div className="App">
        {/* Normal Props Example   */}
        {/* <ClickCounter /><br />
        <HoverCounter /> */}

{/* Render Props Example   */}
        {/* <Counter render= {(count,incrementCount)=> (<ClickCounter count={count} incrementCount = {incrementCount} />) } />        
        <Counter render= {(count,incrementCount)=> (<HoverCounter count={count} incrementCount = {incrementCount} />) } /> */}

{/* Children Props Example  */}
      {/* <Counter> 
        {(count,incrementCount) => (<ClickCounter count={count} incrementCount = {incrementCount} />)} 
      </Counter>  
      <Counter> 
        {(count,incrementCount) => (<HoverCounter count={count} incrementCount = {incrementCount} />)} 
      </Counter>  */}
{/* Render Props Example   */}
        {/* <User  render={ (isLoggedIn)=> isLoggedIn ? "Rama" : 'Guest'}  />   */}
        {/* <User render = {(isLoggedIn)=> isLoggedIn ? 'Rama' : 'Guest'} /> */}
{/* Basic hook Example   */}
        {/* <HookCounter1 /> */}

{/*  hook with Previous state  Example   */}
        {/* <HookCounter2 /> */}

{/*  hook with Object var  Example   */}
        {/* <HookObj /> */}

{/*  hook with Arr var  Example   */}
        {/* <HookArr /> */}

{/*  UeEffect  with conditional rendering  Example   */}
        {/* <UseEffectClass user={"name":"Ram", "xyz"}/>
        <UseEffectFunc /> */}

{/*  UeEffect  with API Fetching Example   */}

        {/* <UseEffectFetchApi /> */}

{/* UseEffect with proper Dependency */}
        {/* <UseEffectProperDependency /> */}

{/* Use Effect with Context  */}
      {/* export  const userNameContext = React.createContext();
      export  const channelContext = React.createContext(); */}
        {/* <userNameContext.Provider value="Rama">
          <channelContext.Provider value={"Code Evolution"}>
            <UseEffectCompC />
          </channelContext.Provider >
        </userNameContext.Provider> */}

  {/* Hooks for Use Reducer as Store Example */}
       <StoreProvider>
               <Hookreducerstoreexample />
               <Hookreducergetstoreobj />
       
       </StoreProvider>



  {/* Hooks for Use Reducer Example */}
        {/* <HookReducer /> */}

{/* Hooks for Use Reducer Object Example */}
        {/* <HookReducerObj /> */}

{/* Hooks for Multiple Use Reducer Object Example */}
        {/* <HooksMultipleReducerObj /> */}

 {/* Hooks for Use Memo Example */}
        {/* < HooksUseMemo /> */}

{/* Custom Hooks With Counter Example  */}
        {/* <HooksCustomCounter1 />
        <HooksCustomCounter2 /> */}

{/* Custom Hooks With Counter Example  */}
      {/* <HooksCustomUserForm /> */}
       

{/* Higher Order Components (HOC) Example */}

        {/* <HocClickCounter />
        <HocHoverCounter /> */}

{/*  Pure component Example   */}

        {/* <PureComp /> */}

 {/* React.Memo Component */}
                {/* <PureComp /> */}


{/* Error Boundary Example */}
      {/* <ErrorBoundary>
        <ErrorBoundaryComp name="batman" />
        </ErrorBoundary>
      
        <ErrorBoundary>
          <ErrorBoundaryComp name="Superman" />
          </ErrorBoundary>
          <ErrorBoundary>
          <ErrorBoundaryComp name="Joker" />
      </ErrorBoundary> */}

{/* Context API Example */}
      {/* <UserProvider value="Rama">
        <ComponentC />
      </UserProvider> */}

      </div>
    )
  }
}

export default App;
