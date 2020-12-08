import React, {Component} from 'react';

export class UseEffectClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count:0,
            name:''
        }
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`;
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.count != this.state.count) {
        console.log("Document get updated using class component");
        document.title = `Clicked ${this.state.count} times`;
        }
    }
	render() {
	return (
	<div><h3>Using Class Component</h3>
        <input type="text" value={this.state.name} onChange={e=>{this.setState({name:e.target.value})
        }} />
	<button onClick={()=> this.setState({count:this.state.count + 1})}> Clicked {this.state.count} times</button>
	</div>
	)}
	}
	
	export default UseEffectClass