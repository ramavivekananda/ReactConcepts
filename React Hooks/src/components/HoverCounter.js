import React, {Component} from 'react';

class HoverCounter extends Component {
	// constructor(props) {
    //     super(props);
    //     this.state = {
    //         count:0
    //     }
    // }
    // incrementCount = () => {
    //     this.setState(prevState => {
    //         return {count:prevState.count + 1}
    //     })
    // }


	render() {

        const {count, incrementCount} = this.props;
	return (
	<button onMouseOver={incrementCount}> Mouse moved {count} times </button>
	)}
	}
	
	export default HoverCounter