import React, {Component} from 'react';
import enchancedComponent from './HocCounter';

class HocHoverCounter extends Component {
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
	
	export default enchancedComponent(HocHoverCounter)