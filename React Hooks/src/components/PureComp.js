import React, {PureComponent, Component} from 'react';
import MemoComponent from './MemoComponent';

export class PureComp extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            name : 'Rama'
            
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({name:'Rama'})
        }, 2000);
    }

	render() {
        console.log("Component is re-rendered");
	return (
	<div>
        <h3>{this.state.name}</h3>
        <MemoComponent name={this.state.name} />
	</div>
	)}
	}
	
	export default PureComp