    import React from "react";
    import { useStore } from './HookReducerStore'
    



    export default function Hookreducergetstoreobj() {
      var { state } = useStore();
      var json = JSON.stringify(state);
      console.log(json);
   
      return (
        <section className="state-view">
          <h2>Current State</h2>
    
          <pre>
            <code>{json}</code>
          </pre>
        </section>
      );
    }