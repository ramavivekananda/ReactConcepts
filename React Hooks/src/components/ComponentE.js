import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './UserContext'

export class ComponentE extends Component {


    // Using contextType also we can print the values both line no 9 & 19 are same meaning 
    static contextType = UserContext;
    render() {
        return (
            <div>
           Component E context <h2>{this.context}</h2>
        <ComponentF />
        </div>
        )
    }
}
//ComponentE.contextType = UserContext;
export default ComponentE
